import { flatKeywordList } from '../../utils';

export const keywords = flatKeywordList({
  // https://mariadb.com/kb/en/information-schema-keywords-table/
  all: [
    'ACCESSIBLE',
    'ACCOUNT',
    'ACTION',
    'ADD',
    'ADMIN',
    'AFTER',
    'AGAINST',
    'AGGREGATE',
    'ALL',
    'ALGORITHM',
    'ALTER',
    'ALWAYS',
    'ANALYZE',
    'AND',
    'ANY',
    'AS',
    'ASC',
    'ASCII',
    'ASENSITIVE',
    'AT',
    'ATOMIC',
    'AUTHORS',
    'AUTO_INCREMENT',
    'AUTOEXTEND_SIZE',
    'AUTO',
    'AVG',
    'AVG_ROW_LENGTH',
    'BACKUP',
    'BEFORE',
    'BEGIN',
    'BETWEEN',
    'BIGINT',
    'BINARY',
    'BINLOG',
    'BIT',
    'BLOB',
    'BLOCK',
    'BODY',
    'BOOL',
    'BOOLEAN',
    'BOTH',
    'BTREE',
    'BY',
    'BYTE',
    'CACHE',
    'CALL',
    'CASCADE',
    'CASCADED',
    'CASE',
    'CATALOG_NAME',
    'CHAIN',
    'CHANGE',
    'CHANGED',
    'CHAR',
    'CHARACTER',
    'CHARSET',
    'CHECK',
    'CHECKPOINT',
    'CHECKSUM',
    'CIPHER',
    'CLASS_ORIGIN',
    'CLIENT',
    'CLOB',
    'CLOSE',
    'COALESCE',
    'CODE',
    'COLLATE',
    'COLLATION',
    'COLUMN',
    'COLUMN_NAME',
    'COLUMNS',
    'COLUMN_ADD',
    'COLUMN_CHECK',
    'COLUMN_CREATE',
    'COLUMN_DELETE',
    'COLUMN_GET',
    'COMMENT',
    'COMMIT',
    'COMMITTED',
    'COMPACT',
    'COMPLETION',
    'COMPRESSED',
    'CONCURRENT',
    'CONDITION',
    'CONNECTION',
    'CONSISTENT',
    'CONSTRAINT',
    'CONSTRAINT_CATALOG',
    'CONSTRAINT_NAME',
    'CONSTRAINT_SCHEMA',
    'CONTAINS',
    'CONTEXT',
    'CONTINUE',
    'CONTRIBUTORS',
    'CONVERT',
    'CPU',
    'CREATE',
    'CROSS',
    'CUBE',
    'CURRENT',
    'CURRENT_DATE',
    'CURRENT_POS',
    'CURRENT_ROLE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'CURRENT_USER',
    'CURSOR',
    'CURSOR_NAME',
    'CYCLE',
    'DATA',
    'DATABASE',
    'DATABASES',
    'DATAFILE',
    'DATE',
    'DATETIME',
    'DAY',
    'DAY_HOUR',
    'DAY_MICROSECOND',
    'DAY_MINUTE',
    'DAY_SECOND',
    'DEALLOCATE',
    'DEC',
    'DECIMAL',
    'DECLARE',
    'DEFAULT',
    'DEFINER',
    'DELAYED',
    'DELAY_KEY_WRITE',
    'DELETE',
    'DELETE_DOMAIN_ID',
    'DESC',
    'DESCRIBE',
    'DES_KEY_FILE',
    'DETERMINISTIC',
    'DIAGNOSTICS',
    'DIRECTORY',
    'DISABLE',
    'DISCARD',
    'DISK',
    'DISTINCT',
    'DISTINCTROW',
    'DIV',
    'DO',
    'DOUBLE',
    'DO_DOMAIN_IDS',
    'DROP',
    'DUAL',
    'DUMPFILE',
    'DUPLICATE',
    'DYNAMIC',
    'EACH',
    'ELSE',
    'ELSEIF',
    'ELSIF',
    'EMPTY',
    'ENABLE',
    'ENCLOSED',
    'END',
    'ENDS',
    'ENGINE',
    'ENGINES',
    'ENUM',
    'ERROR',
    'ERRORS',
    'ESCAPE',
    'ESCAPED',
    'EVENT',
    'EVENTS',
    'EVERY',
    'EXAMINED',
    'EXCEPT',
    'EXCHANGE',
    'EXCLUDE',
    'EXECUTE',
    'EXCEPTION',
    'EXISTS',
    'EXIT',
    'EXPANSION',
    'EXPIRE',
    'EXPORT',
    'EXPLAIN',
    'EXTENDED',
    'EXTENT_SIZE',
    'FALSE',
    'FAST',
    'FAULTS',
    'FEDERATED',
    'FETCH',
    'FIELDS',
    'FILE',
    'FIRST',
    'FIXED',
    'FLOAT',
    'FLOAT4',
    'FLOAT8',
    'FLUSH',
    'FOLLOWING',
    'FOLLOWS',
    'FOR',
    'FORCE',
    'FOREIGN',
    'FORMAT',
    'FOUND',
    'FROM',
    'FULL',
    'FULLTEXT',
    'FUNCTION',
    'GENERAL',
    'GENERATED',
    'GET_FORMAT',
    'GET',
    'GLOBAL',
    'GOTO',
    'GRANT',
    'GRANTS',
    'GROUP',
    'HANDLER',
    'HARD',
    'HASH',
    'HAVING',
    'HELP',
    'HIGH_PRIORITY',
    'HISTORY',
    'HOST',
    'HOSTS',
    'HOUR',
    'HOUR_MICROSECOND',
    'HOUR_MINUTE',
    'HOUR_SECOND',
    // 'ID', // conflicts with common column name
    'IDENTIFIED',
    'IF',
    'IGNORE',
    'IGNORED',
    'IGNORE_DOMAIN_IDS',
    'IGNORE_SERVER_IDS',
    'IMMEDIATE',
    'IMPORT',
    'INTERSECT',
    'IN',
    'INCREMENT',
    'INDEX',
    'INDEXES',
    'INFILE',
    'INITIAL_SIZE',
    'INNER',
    'INOUT',
    'INSENSITIVE',
    'INSERT',
    'INSERT_METHOD',
    'INSTALL',
    'INT',
    'INT1',
    'INT2',
    'INT3',
    'INT4',
    'INT8',
    'INTEGER',
    'INTERVAL',
    'INVISIBLE',
    'INTO',
    'IO',
    'IO_THREAD',
    'IPC',
    'IS',
    'ISOLATION',
    'ISOPEN',
    'ISSUER',
    'ITERATE',
    'INVOKER',
    'JOIN',
    'JSON',
    'JSON_TABLE',
    'KEY',
    'KEYS',
    'KEY_BLOCK_SIZE',
    'KILL',
    'LANGUAGE',
    'LAST',
    'LAST_VALUE',
    'LASTVAL',
    'LEADING',
    'LEAVE',
    'LEAVES',
    'LEFT',
    'LESS',
    'LEVEL',
    'LIKE',
    'LIMIT',
    'LINEAR',
    'LINES',
    'LIST',
    'LOAD',
    'LOCAL',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LOCK',
    'LOCKED',
    'LOCKS',
    'LOGFILE',
    'LOGS',
    'LONG',
    'LONGBLOB',
    'LONGTEXT',
    'LOOP',
    'LOW_PRIORITY',
    'MASTER',
    'MASTER_CONNECT_RETRY',
    'MASTER_DELAY',
    'MASTER_GTID_POS',
    'MASTER_HOST',
    'MASTER_LOG_FILE',
    'MASTER_LOG_POS',
    'MASTER_PASSWORD',
    'MASTER_PORT',
    'MASTER_SERVER_ID',
    'MASTER_SSL',
    'MASTER_SSL_CA',
    'MASTER_SSL_CAPATH',
    'MASTER_SSL_CERT',
    'MASTER_SSL_CIPHER',
    'MASTER_SSL_CRL',
    'MASTER_SSL_CRLPATH',
    'MASTER_SSL_KEY',
    'MASTER_SSL_VERIFY_SERVER_CERT',
    'MASTER_USER',
    'MASTER_USE_GTID',
    'MASTER_HEARTBEAT_PERIOD',
    'MATCH',
    'MAX_CONNECTIONS_PER_HOUR',
    'MAX_QUERIES_PER_HOUR',
    'MAX_ROWS',
    'MAX_SIZE',
    'MAX_STATEMENT_TIME',
    'MAX_UPDATES_PER_HOUR',
    'MAX_USER_CONNECTIONS',
    'MAXVALUE',
    'MEDIUM',
    'MEDIUMBLOB',
    'MEDIUMINT',
    'MEDIUMTEXT',
    'MEMORY',
    'MERGE',
    'MESSAGE_TEXT',
    'MICROSECOND',
    'MIDDLEINT',
    'MIGRATE',
    'MINUS',
    'MINUTE',
    'MINUTE_MICROSECOND',
    'MINUTE_SECOND',
    'MINVALUE',
    'MIN_ROWS',
    'MOD',
    'MODE',
    'MODIFIES',
    'MODIFY',
    'MONITOR',
    'MONTH',
    'MUTEX',
    'MYSQL',
    'MYSQL_ERRNO',
    'NAME',
    'NAMES',
    'NATIONAL',
    'NATURAL',
    'NCHAR',
    'NESTED',
    'NEVER',
    'NEW',
    'NEXT',
    'NEXTVAL',
    'NO',
    'NOMAXVALUE',
    'NOMINVALUE',
    'NOCACHE',
    'NOCYCLE',
    'NO_WAIT',
    'NOWAIT',
    'NODEGROUP',
    'NONE',
    'NOT',
    'NOTFOUND',
    'NO_WRITE_TO_BINLOG',
    'NULL',
    'NUMBER',
    'NUMERIC',
    'NVARCHAR',
    'OF',
    'OFFSET',
    'OLD_PASSWORD',
    'ON',
    'ONE',
    'ONLINE',
    'ONLY',
    'OPEN',
    'OPTIMIZE',
    'OPTIONS',
    'OPTION',
    'OPTIONALLY',
    'OR',
    'ORDER',
    'ORDINALITY',
    'OTHERS',
    'OUT',
    'OUTER',
    'OUTFILE',
    'OVER',
    'OVERLAPS',
    'OWNER',
    'PACKAGE',
    'PACK_KEYS',
    'PAGE',
    'PAGE_CHECKSUM',
    'PARSER',
    'PARSE_VCOL_EXPR',
    'PATH',
    'PERIOD',
    'PARTIAL',
    'PARTITION',
    'PARTITIONING',
    'PARTITIONS',
    'PASSWORD',
    'PERSISTENT',
    'PHASE',
    'PLUGIN',
    'PLUGINS',
    'PORT',
    'PORTION',
    'PRECEDES',
    'PRECEDING',
    'PRECISION',
    'PREPARE',
    'PRESERVE',
    'PREV',
    'PREVIOUS',
    'PRIMARY',
    'PRIVILEGES',
    'PROCEDURE',
    'PROCESS',
    'PROCESSLIST',
    'PROFILE',
    'PROFILES',
    'PROXY',
    'PURGE',
    'QUARTER',
    'QUERY',
    'QUICK',
    'RAISE',
    'RANGE',
    'RAW',
    'READ',
    'READ_ONLY',
    'READ_WRITE',
    'READS',
    'REAL',
    'REBUILD',
    'RECOVER',
    'RECURSIVE',
    'REDO_BUFFER_SIZE',
    'REDOFILE',
    'REDUNDANT',
    'REFERENCES',
    'REGEXP',
    'RELAY',
    'RELAYLOG',
    'RELAY_LOG_FILE',
    'RELAY_LOG_POS',
    'RELAY_THREAD',
    'RELEASE',
    'RELOAD',
    'REMOVE',
    'RENAME',
    'REORGANIZE',
    'REPAIR',
    'REPEATABLE',
    'REPLACE',
    'REPLAY',
    'REPLICA',
    'REPLICAS',
    'REPLICA_POS',
    'REPLICATION',
    'REPEAT',
    'REQUIRE',
    'RESET',
    'RESIGNAL',
    'RESTART',
    'RESTORE',
    'RESTRICT',
    'RESUME',
    'RETURNED_SQLSTATE',
    'RETURN',
    'RETURNING',
    'RETURNS',
    'REUSE',
    'REVERSE',
    'REVOKE',
    'RIGHT',
    'RLIKE',
    'ROLE',
    'ROLLBACK',
    'ROLLUP',
    'ROUTINE',
    'ROW',
    'ROWCOUNT',
    'ROWNUM',
    'ROWS',
    'ROWTYPE',
    'ROW_COUNT',
    'ROW_FORMAT',
    'RTREE',
    'SAVEPOINT',
    'SCHEDULE',
    'SCHEMA',
    'SCHEMA_NAME',
    'SCHEMAS',
    'SECOND',
    'SECOND_MICROSECOND',
    'SECURITY',
    'SELECT',
    'SENSITIVE',
    'SEPARATOR',
    'SEQUENCE',
    'SERIAL',
    'SERIALIZABLE',
    'SESSION',
    'SERVER',
    'SET',
    'SETVAL',
    'SHARE',
    'SHOW',
    'SHUTDOWN',
    'SIGNAL',
    'SIGNED',
    'SIMPLE',
    'SKIP',
    'SLAVE',
    'SLAVES',
    'SLAVE_POS',
    'SLOW',
    'SNAPSHOT',
    'SMALLINT',
    'SOCKET',
    'SOFT',
    'SOME',
    'SONAME',
    'SOUNDS',
    'SOURCE',
    'STAGE',
    'STORED',
    'SPATIAL',
    'SPECIFIC',
    'REF_SYSTEM_ID',
    'SQL',
    'SQLEXCEPTION',
    'SQLSTATE',
    'SQLWARNING',
    'SQL_BIG_RESULT',
    'SQL_BUFFER_RESULT',
    'SQL_CACHE',
    'SQL_CALC_FOUND_ROWS',
    'SQL_NO_CACHE',
    'SQL_SMALL_RESULT',
    'SQL_THREAD',
    'SQL_TSI_SECOND',
    'SQL_TSI_MINUTE',
    'SQL_TSI_HOUR',
    'SQL_TSI_DAY',
    'SQL_TSI_WEEK',
    'SQL_TSI_MONTH',
    'SQL_TSI_QUARTER',
    'SQL_TSI_YEAR',
    'SSL',
    'START',
    'STARTING',
    'STARTS',
    'STATEMENT',
    'STATS_AUTO_RECALC',
    'STATS_PERSISTENT',
    'STATS_SAMPLE_PAGES',
    'STATUS',
    'STOP',
    'STORAGE',
    'STRAIGHT_JOIN',
    'STRING',
    'SUBCLASS_ORIGIN',
    'SUBJECT',
    'SUBPARTITION',
    'SUBPARTITIONS',
    'SUPER',
    'SUSPEND',
    'SWAPS',
    'SWITCHES',
    'SYSDATE',
    'SYSTEM',
    'SYSTEM_TIME',
    'TABLE',
    'TABLE_NAME',
    'TABLES',
    'TABLESPACE',
    'TABLE_CHECKSUM',
    'TEMPORARY',
    'TEMPTABLE',
    'TERMINATED',
    'TEXT',
    'THAN',
    'THEN',
    'TIES',
    'TIME',
    'TIMESTAMP',
    'TIMESTAMPADD',
    'TIMESTAMPDIFF',
    'TINYBLOB',
    'TINYINT',
    'TINYTEXT',
    'TO',
    'TRAILING',
    'TRANSACTION',
    'TRANSACTIONAL',
    'THREADS',
    'TRIGGER',
    'TRIGGERS',
    'TRUE',
    'TRUNCATE',
    'TYPE',
    'TYPES',
    'UNBOUNDED',
    'UNCOMMITTED',
    'UNDEFINED',
    'UNDO_BUFFER_SIZE',
    'UNDOFILE',
    'UNDO',
    'UNICODE',
    'UNION',
    'UNIQUE',
    'UNKNOWN',
    'UNLOCK',
    'UNINSTALL',
    'UNSIGNED',
    'UNTIL',
    'UPDATE',
    'UPGRADE',
    'USAGE',
    'USE',
    'USER',
    'USER_RESOURCES',
    'USE_FRM',
    'USING',
    'UTC_DATE',
    'UTC_TIME',
    'UTC_TIMESTAMP',
    'VALUE',
    'VALUES',
    'VARBINARY',
    'VARCHAR',
    'VARCHARACTER',
    'VARCHAR2',
    'VARIABLES',
    'VARYING',
    'VIA',
    'VIEW',
    'VIRTUAL',
    'VISIBLE',
    'VERSIONING',
    'WAIT',
    'WARNINGS',
    'WEEK',
    'WEIGHT_STRING',
    'WHEN',
    'WHERE',
    'WHILE',
    'WINDOW',
    'WITH',
    'WITHIN',
    'WITHOUT',
    'WORK',
    'WRAPPER',
    'WRITE',
    'X509',
    'XOR',
    'XA',
    'XML',
    'YEAR',
    'YEAR_MONTH',
    'ZEROFILL',
  ],
  constraints: ['ON DELETE', 'ON UPDATE'],
  charset: ['CHARACTER SET'],
});
