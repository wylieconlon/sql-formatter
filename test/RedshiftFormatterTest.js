import dedent from 'dedent-js';
import * as sqlFormatter from '../src/sqlFormatter';
import behavesLikeSqlFormatter from './behavesLikeSqlFormatter';

describe('RedshiftFormatter', () => {
  behavesLikeSqlFormatter('redshift');

  const format = (query, cfg = {}) => sqlFormatter.format(query, { ...cfg, language: 'redshift' });

  it('formats LIMIT', () => {
    expect(format('SELECT col1 FROM tbl ORDER BY col2 DESC LIMIT 10;')).toBe(dedent`
      SELECT
        col1
      FROM
        tbl
      ORDER BY
        col2 DESC
      LIMIT
        10;
    `);
  });

  it('formats only -- as a line comment', () => {
    const result = format(
      `
      SELECT col FROM
      -- This is a comment
      MyTable;
      `
    );
    expect(result).toBe(dedent`
      SELECT
        col
      FROM
        -- This is a comment
        MyTable;
    `);
  });

  it('recognizes @ as part of identifiers', () => {
    const result = format('SELECT @col1 FROM tbl', {
      language: 'redshift',
    });
    expect(result).toBe(dedent`
      SELECT
        @col1
      FROM
        tbl
    `);
  });

  it('formats short CREATE TABLE', () => {
    expect(format('CREATE TABLE items (a INT, b TEXT);')).toBe(
      'CREATE TABLE items (a INT, b TEXT);'
    );
  });

  it.skip('formats long CREATE TABLE', () => {
    expect(
      format(
        'CREATE TABLE items (a INT PRIMARY KEY, b TEXT, c INT NOT NULL, d INT NOT NULL) DISTKEY(created_at) SORTKEY(created_at);'
      )
    ).toBe(dedent`
      CREATE TABLE items (
        a INT PRIMARY KEY,
        b TEXT,
        c INT NOT NULL,
        d INT NOT NULL
      )
      DISTKEY(created_at)
      SORTKEY(created_at);
    `);
  });

  it('formats COPY', () => {
    expect(
      format(
        `
        COPY schema.table
        FROM 's3://bucket/file.csv'
        IAM_ROLE 'arn:aws:iam::123456789:role/rolename'
        FORMAT AS CSV DELIMITER ',' QUOTE '"'
        REGION AS 'us-east-1'
        `
      )
    ).toBe(dedent`
      COPY
        schema.table
      FROM
        's3://bucket/file.csv'
      IAM_ROLE
        'arn:aws:iam::123456789:role/rolename'
      FORMAT
        AS CSV
      DELIMITER
        ',' QUOTE '"'
      REGION
        AS 'us-east-1'
    `);
  });
});