module.exports.VERSION = '1.1.0';
module.exports.BS_DOMAIN = 'browserstack.com';
module.exports.HUB_HOST = 'hub-cloud.' + this.BS_DOMAIN;
module.exports.RAILS_HOST = 'automate.' + this.BS_DOMAIN;
module.exports.HUB_STATUS_PATH = '/wd/hub/status';
module.exports.HUB_STATUS_URL = 'http://' + this.HUB_HOST + this.HUB_STATUS_PATH;
module.exports.HUB_STATUS_URL_HTTPS = 'https://' + this.HUB_HOST + this.HUB_STATUS_PATH;
module.exports.RAILS_AUTOMATE = 'http://' + this.RAILS_HOST;
module.exports.RAILS_AUTOMATE_HTTPS = 'https://' + this.RAILS_HOST;
module.exports.CONNECTIVITY_REQ_TIMEOUT = 30000;
module.exports.DEFAULT_PROXY_PORT = 3128;
module.exports.CUSTOM_ERROR_RESPONSE_CODE = 502;
module.exports.MAX_RETRIES = 1;
module.exports.LOGS_FOLDER = 'RequestsDebuggerLogs';
module.exports.PORTS = {
  MAX: 65535,
  MIN: 1
};

module.exports.LINE_LENGTH = 70;
module.exports.PROTOCOL_REGEX = /(^\w+:|^)\/\//;

module.exports.LOGS = Object.freeze({
  NETWORK: 'NetworkStats.log',
  CPU: 'CPUStats.log',
  MEM: 'MemStats.log',
  REQUESTS: 'Requests.log',
  CONNECTIVITY: 'Connectivity.log',
  ERROR: 'RDT_Error.log'
});

module.exports.RdGlobalConfig = {
  RETRY_DELAY: 1000, // in ms
  RD_HANDLER_PROXY_PORT: process.env.NODE_ENV === 'test' ? 8787 : 9687,
  RD_HANDLER_REVERSE_PROXY_PORT: process.env.NODE_ENV === 'test' ? 8788 : 9688,
  CLIENT_REQ_TIMEOUT: 260000, // in ms
  SCHEME: 'https'
};

module.exports.COMMON = Object.freeze({
  PING_HUB: 'ping -c 5 ' + this.HUB_HOST,
  PING_AUTOMATE: 'ping -c 5 ' + this.RAILS_HOST
});

module.exports.MAC = Object.freeze({
  TCP_LISTEN_ESTABLISHED: 'lsof -PiTCP',
  TOP_3_SAMPLES: 'top -n 10 -l 3 -stats pid,command,cpu,cpu_others,time,threads,ports,mem,vsize,pgrp,ppid,cycles',
  SWAP_USAGE: 'sysctl -n vm.swapusage'
});

module.exports.LINUX = Object.freeze({
  TCP_LISTEN_ESTABLISHED: 'lsof -PiTCP',
  TOP_3_SAMPLES: 'top -bn 3',
  PROC_MEMINFO: '/proc/meminfo'
});

module.exports.WIN = Object.freeze({
  NETSTAT_TCP: 'netstat -anosp tcp',
  NETSTAT_ROUTING_TABLE: 'netstat -r',
  IPCONFIG_ALL: 'ipconfig /all',
  SWAP_USAGE: 'pagefile get AllocatedBaseSize, CurrentUsage', // this is a WMIC command. Prefix with WMIC Path
  PING_HUB: 'ping -n 5 ' + this.HUB_HOST,
  PING_AUTOMATE: 'ping -n 5 ' + this.RAILS_HOST,
  LOAD_PERCENTAGE: 'cpu get loadpercentage', // prefix wmic path
});

module.exports.ERROR_CODES = Object.freeze({
  EEXIST: 'EEXIST'
});

module.exports.TOPICS = Object.freeze({
  LINUX_MEM: 'Linux-Mem',
  MAC_MEM: 'Mac-Mem',
  WIN_MEM: 'Win-Mem',
  TOOL_REQUEST_WITH_RETRIES: 'Tool Request - Retries Left: ',
  TOOL_RESPONSE_ERROR: 'Tool Response',
  CLIENT_REQUEST_WITH_RETRIES: 'Request - Retries Left: ',
  CLIENT_REQUEST_END: 'Request End',
  CLIENT_REQUEST_START: 'Request Start',
  CLIENT_RESPONSE_END: 'Response End',
  NO_TOPIC: 'NO_TOPIC',
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR'
});

module.exports.STATIC_MESSAGES = Object.freeze({
  STARTING_TOOL: 'Starting Requests Debugger Tool',
  CHECK_CPU_STATS: 'Stats : Checking CPU Stats',
  CHECK_NETWORK_STATS: 'Stats : Checking Network Stats',
  CHECK_MEMORY_STATS: 'Stats : Checking Memory Stats',
  CHECK_CONNECTIVITY: 'Checks : Checking Connectivity With BrowserStack',
  ERR_STARTING_TOOL_PROXY: 'Error in starting Requests Debugger Tool Proxy: ',
  ERR_STARTING_TOOL_REVERSE_PROXY: 'Error in starting Requests Debugger Tool Reverse Proxy: ',
  TOOL_PROXY_STARTED_ON_PORT: 'Requests Debugger Tool Proxy Server Started on Port: ',
  TOOL_REVESE_PROXY_STARTED_ON_PORT: 'Requests Debugger Tool Reverse Proxy Server Started on Port: ',
  CPU_STATS_COLLECTED: 'Stats : Initial CPU Stats Collected',
  NETWORK_STATS_COLLECTED: 'Stats : Initial Network Stats Collected',
  MEMORY_STATS_COLLECTED: 'Stats : Initial Memory Stats Collected',
  CONNECTIVITY_CHECKS_DONE: 'Checks : Connectivity Checks Performed with BrowserStack',
  NO_REPORT_GENERATED: 'COULD NOT GENERATE REPORT FOR : ',
  REQ_TIMED_OUT: 'Request Timed Out. Did not get any response for ',
  REQ_FAILED_MSG: 'Request Failed At Requests Debugger',
  BASE_STATS_DESC: 'Base Object for System & Network Stats',
  CPU_STATS_NOT_IMPLEMENTED: 'CPU Stats Not Yet Implemented',
  MEM_STATS_NOT_IMPLEMENTED: 'Mem Stats Not Yet Implemented',
  NETWORK_STATS_NOT_IMPLEMENTED: 'Network Stats Not Yet Implemented',
  LINUX_STATS_DESC: 'System and Network Stats for Linux',
  MAC_STATS_DESC: 'System and Network Stats for Mac',
  WIN_STATS_DESC: 'System and Network Stats for Windows'
});
