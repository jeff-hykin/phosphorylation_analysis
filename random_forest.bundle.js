// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class DenoStdInternalError extends Error {
    constructor(message) {
        super(message)
        this.name = "DenoStdInternalError"
    }
}
function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg)
    }
}
function unreachable() {
    throw new DenoStdInternalError("unreachable")
}
const osType = (() => {
    const { Deno: Deno1 } = globalThis
    if (typeof Deno1?.build?.os === "string") {
        return Deno1.build.os
    }
    const { navigator } = globalThis
    if (navigator?.appVersion?.includes?.("Win")) {
        return "windows"
    }
    return "linux"
})()
const isWindows = osType === "windows"
const isLinux = osType === "linux"
function uvTranslateSysError(sysErrno) {
    switch (sysErrno) {
        case 5:
            return "EACCES"
        case 998:
            return "EACCES"
        case 10013:
            return "EACCES"
        case 1920:
            return "EACCES"
        case 1227:
            return "EADDRINUSE"
        case 10048:
            return "EADDRINUSE"
        case 10049:
            return "EADDRNOTAVAIL"
        case 10047:
            return "EAFNOSUPPORT"
        case 10035:
            return "EAGAIN"
        case 10037:
            return "EALREADY"
        case 1004:
            return "EBADF"
        case 6:
            return "EBADF"
        case 33:
            return "EBUSY"
        case 231:
            return "EBUSY"
        case 32:
            return "EBUSY"
        case 995:
            return "ECANCELED"
        case 10004:
            return "ECANCELED"
        case 1113:
            return "ECHARSET"
        case 1236:
            return "ECONNABORTED"
        case 10053:
            return "ECONNABORTED"
        case 1225:
            return "ECONNREFUSED"
        case 10061:
            return "ECONNREFUSED"
        case 64:
            return "ECONNRESET"
        case 10054:
            return "ECONNRESET"
        case 183:
            return "EEXIST"
        case 80:
            return "EEXIST"
        case 111:
            return "EFAULT"
        case 10014:
            return "EFAULT"
        case 1232:
            return "EHOSTUNREACH"
        case 10065:
            return "EHOSTUNREACH"
        case 122:
            return "EINVAL"
        case 13:
            return "EINVAL"
        case 123:
            return "EINVAL"
        case 87:
            return "EINVAL"
        case 10022:
            return "EINVAL"
        case 10046:
            return "EINVAL"
        case 1102:
            return "EIO"
        case 1111:
            return "EIO"
        case 23:
            return "EIO"
        case 1166:
            return "EIO"
        case 1165:
            return "EIO"
        case 1393:
            return "EIO"
        case 1129:
            return "EIO"
        case 1101:
            return "EIO"
        case 31:
            return "EIO"
        case 1106:
            return "EIO"
        case 1117:
            return "EIO"
        case 1104:
            return "EIO"
        case 205:
            return "EIO"
        case 110:
            return "EIO"
        case 1103:
            return "EIO"
        case 156:
            return "EIO"
        case 10056:
            return "EISCONN"
        case 1921:
            return "ELOOP"
        case 4:
            return "EMFILE"
        case 10024:
            return "EMFILE"
        case 10040:
            return "EMSGSIZE"
        case 206:
            return "ENAMETOOLONG"
        case 1231:
            return "ENETUNREACH"
        case 10051:
            return "ENETUNREACH"
        case 10055:
            return "ENOBUFS"
        case 161:
            return "ENOENT"
        case 267:
            return "ENOTDIR"
        case 203:
            return "ENOENT"
        case 2:
            return "ENOENT"
        case 15:
            return "ENOENT"
        case 4392:
            return "ENOENT"
        case 126:
            return "ENOENT"
        case 3:
            return "ENOENT"
        case 11001:
            return "ENOENT"
        case 11004:
            return "ENOENT"
        case 8:
            return "ENOMEM"
        case 14:
            return "ENOMEM"
        case 82:
            return "ENOSPC"
        case 112:
            return "ENOSPC"
        case 277:
            return "ENOSPC"
        case 1100:
            return "ENOSPC"
        case 39:
            return "ENOSPC"
        case 2250:
            return "ENOTCONN"
        case 10057:
            return "ENOTCONN"
        case 145:
            return "ENOTEMPTY"
        case 10038:
            return "ENOTSOCK"
        case 50:
            return "ENOTSUP"
        case 109:
            return "EOF"
        case 1314:
            return "EPERM"
        case 230:
            return "EPIPE"
        case 232:
            return "EPIPE"
        case 233:
            return "EPIPE"
        case 10058:
            return "EPIPE"
        case 10043:
            return "EPROTONOSUPPORT"
        case 19:
            return "EROFS"
        case 121:
            return "ETIMEDOUT"
        case 10060:
            return "ETIMEDOUT"
        case 17:
            return "EXDEV"
        case 1:
            return "EISDIR"
        case 208:
            return "E2BIG"
        case 10044:
            return "ESOCKTNOSUPPORT"
        default:
            return "UNKNOWN"
    }
}
const codeToErrorWindows = [
    [-4093, ["E2BIG", "argument list too long"]],
    [-4092, ["EACCES", "permission denied"]],
    [-4091, ["EADDRINUSE", "address already in use"]],
    [-4090, ["EADDRNOTAVAIL", "address not available"]],
    [-4089, ["EAFNOSUPPORT", "address family not supported"]],
    [-4088, ["EAGAIN", "resource temporarily unavailable"]],
    [-3000, ["EAI_ADDRFAMILY", "address family not supported"]],
    [-3001, ["EAI_AGAIN", "temporary failure"]],
    [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
    [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
    [-3003, ["EAI_CANCELED", "request canceled"]],
    [-3004, ["EAI_FAIL", "permanent failure"]],
    [-3005, ["EAI_FAMILY", "ai_family not supported"]],
    [-3006, ["EAI_MEMORY", "out of memory"]],
    [-3007, ["EAI_NODATA", "no address"]],
    [-3008, ["EAI_NONAME", "unknown node or service"]],
    [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
    [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
    [-3010, ["EAI_SERVICE", "service not available for socket type"]],
    [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
    [-4084, ["EALREADY", "connection already in progress"]],
    [-4083, ["EBADF", "bad file descriptor"]],
    [-4082, ["EBUSY", "resource busy or locked"]],
    [-4081, ["ECANCELED", "operation canceled"]],
    [-4080, ["ECHARSET", "invalid Unicode character"]],
    [-4079, ["ECONNABORTED", "software caused connection abort"]],
    [-4078, ["ECONNREFUSED", "connection refused"]],
    [-4077, ["ECONNRESET", "connection reset by peer"]],
    [-4076, ["EDESTADDRREQ", "destination address required"]],
    [-4075, ["EEXIST", "file already exists"]],
    [-4074, ["EFAULT", "bad address in system call argument"]],
    [-4036, ["EFBIG", "file too large"]],
    [-4073, ["EHOSTUNREACH", "host is unreachable"]],
    [-4072, ["EINTR", "interrupted system call"]],
    [-4071, ["EINVAL", "invalid argument"]],
    [-4070, ["EIO", "i/o error"]],
    [-4069, ["EISCONN", "socket is already connected"]],
    [-4068, ["EISDIR", "illegal operation on a directory"]],
    [-4067, ["ELOOP", "too many symbolic links encountered"]],
    [-4066, ["EMFILE", "too many open files"]],
    [-4065, ["EMSGSIZE", "message too long"]],
    [-4064, ["ENAMETOOLONG", "name too long"]],
    [-4063, ["ENETDOWN", "network is down"]],
    [-4062, ["ENETUNREACH", "network is unreachable"]],
    [-4061, ["ENFILE", "file table overflow"]],
    [-4060, ["ENOBUFS", "no buffer space available"]],
    [-4059, ["ENODEV", "no such device"]],
    [-4058, ["ENOENT", "no such file or directory"]],
    [-4057, ["ENOMEM", "not enough memory"]],
    [-4056, ["ENONET", "machine is not on the network"]],
    [-4035, ["ENOPROTOOPT", "protocol not available"]],
    [-4055, ["ENOSPC", "no space left on device"]],
    [-4054, ["ENOSYS", "function not implemented"]],
    [-4053, ["ENOTCONN", "socket is not connected"]],
    [-4052, ["ENOTDIR", "not a directory"]],
    [-4051, ["ENOTEMPTY", "directory not empty"]],
    [-4050, ["ENOTSOCK", "socket operation on non-socket"]],
    [-4049, ["ENOTSUP", "operation not supported on socket"]],
    [-4048, ["EPERM", "operation not permitted"]],
    [-4047, ["EPIPE", "broken pipe"]],
    [-4046, ["EPROTO", "protocol error"]],
    [-4045, ["EPROTONOSUPPORT", "protocol not supported"]],
    [-4044, ["EPROTOTYPE", "protocol wrong type for socket"]],
    [-4034, ["ERANGE", "result too large"]],
    [-4043, ["EROFS", "read-only file system"]],
    [-4042, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
    [-4041, ["ESPIPE", "invalid seek"]],
    [-4040, ["ESRCH", "no such process"]],
    [-4039, ["ETIMEDOUT", "connection timed out"]],
    [-4038, ["ETXTBSY", "text file is busy"]],
    [-4037, ["EXDEV", "cross-device link not permitted"]],
    [-4094, ["UNKNOWN", "unknown error"]],
    [-4095, ["EOF", "end of file"]],
    [-4033, ["ENXIO", "no such device or address"]],
    [-4032, ["EMLINK", "too many links"]],
    [-4031, ["EHOSTDOWN", "host is down"]],
    [-4030, ["EREMOTEIO", "remote I/O error"]],
    [-4029, ["ENOTTY", "inappropriate ioctl for device"]],
    [-4028, ["EFTYPE", "inappropriate file type or format"]],
    [-4027, ["EILSEQ", "illegal byte sequence"]],
]
const errorToCodeWindows = codeToErrorWindows.map(([status, [error]]) => [error, status])
const codeToErrorDarwin = [
    [-7, ["E2BIG", "argument list too long"]],
    [-13, ["EACCES", "permission denied"]],
    [-48, ["EADDRINUSE", "address already in use"]],
    [-49, ["EADDRNOTAVAIL", "address not available"]],
    [-47, ["EAFNOSUPPORT", "address family not supported"]],
    [-35, ["EAGAIN", "resource temporarily unavailable"]],
    [-3000, ["EAI_ADDRFAMILY", "address family not supported"]],
    [-3001, ["EAI_AGAIN", "temporary failure"]],
    [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
    [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
    [-3003, ["EAI_CANCELED", "request canceled"]],
    [-3004, ["EAI_FAIL", "permanent failure"]],
    [-3005, ["EAI_FAMILY", "ai_family not supported"]],
    [-3006, ["EAI_MEMORY", "out of memory"]],
    [-3007, ["EAI_NODATA", "no address"]],
    [-3008, ["EAI_NONAME", "unknown node or service"]],
    [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
    [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
    [-3010, ["EAI_SERVICE", "service not available for socket type"]],
    [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
    [-37, ["EALREADY", "connection already in progress"]],
    [-9, ["EBADF", "bad file descriptor"]],
    [-16, ["EBUSY", "resource busy or locked"]],
    [-89, ["ECANCELED", "operation canceled"]],
    [-4080, ["ECHARSET", "invalid Unicode character"]],
    [-53, ["ECONNABORTED", "software caused connection abort"]],
    [-61, ["ECONNREFUSED", "connection refused"]],
    [-54, ["ECONNRESET", "connection reset by peer"]],
    [-39, ["EDESTADDRREQ", "destination address required"]],
    [-17, ["EEXIST", "file already exists"]],
    [-14, ["EFAULT", "bad address in system call argument"]],
    [-27, ["EFBIG", "file too large"]],
    [-65, ["EHOSTUNREACH", "host is unreachable"]],
    [-4, ["EINTR", "interrupted system call"]],
    [-22, ["EINVAL", "invalid argument"]],
    [-5, ["EIO", "i/o error"]],
    [-56, ["EISCONN", "socket is already connected"]],
    [-21, ["EISDIR", "illegal operation on a directory"]],
    [-62, ["ELOOP", "too many symbolic links encountered"]],
    [-24, ["EMFILE", "too many open files"]],
    [-40, ["EMSGSIZE", "message too long"]],
    [-63, ["ENAMETOOLONG", "name too long"]],
    [-50, ["ENETDOWN", "network is down"]],
    [-51, ["ENETUNREACH", "network is unreachable"]],
    [-23, ["ENFILE", "file table overflow"]],
    [-55, ["ENOBUFS", "no buffer space available"]],
    [-19, ["ENODEV", "no such device"]],
    [-2, ["ENOENT", "no such file or directory"]],
    [-12, ["ENOMEM", "not enough memory"]],
    [-4056, ["ENONET", "machine is not on the network"]],
    [-42, ["ENOPROTOOPT", "protocol not available"]],
    [-28, ["ENOSPC", "no space left on device"]],
    [-78, ["ENOSYS", "function not implemented"]],
    [-57, ["ENOTCONN", "socket is not connected"]],
    [-20, ["ENOTDIR", "not a directory"]],
    [-66, ["ENOTEMPTY", "directory not empty"]],
    [-38, ["ENOTSOCK", "socket operation on non-socket"]],
    [-45, ["ENOTSUP", "operation not supported on socket"]],
    [-1, ["EPERM", "operation not permitted"]],
    [-32, ["EPIPE", "broken pipe"]],
    [-100, ["EPROTO", "protocol error"]],
    [-43, ["EPROTONOSUPPORT", "protocol not supported"]],
    [-41, ["EPROTOTYPE", "protocol wrong type for socket"]],
    [-34, ["ERANGE", "result too large"]],
    [-30, ["EROFS", "read-only file system"]],
    [-58, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
    [-29, ["ESPIPE", "invalid seek"]],
    [-3, ["ESRCH", "no such process"]],
    [-60, ["ETIMEDOUT", "connection timed out"]],
    [-26, ["ETXTBSY", "text file is busy"]],
    [-18, ["EXDEV", "cross-device link not permitted"]],
    [-4094, ["UNKNOWN", "unknown error"]],
    [-4095, ["EOF", "end of file"]],
    [-6, ["ENXIO", "no such device or address"]],
    [-31, ["EMLINK", "too many links"]],
    [-64, ["EHOSTDOWN", "host is down"]],
    [-4030, ["EREMOTEIO", "remote I/O error"]],
    [-25, ["ENOTTY", "inappropriate ioctl for device"]],
    [-79, ["EFTYPE", "inappropriate file type or format"]],
    [-92, ["EILSEQ", "illegal byte sequence"]],
]
const errorToCodeDarwin = codeToErrorDarwin.map(([status, [code]]) => [code, status])
const codeToErrorLinux = [
    [-7, ["E2BIG", "argument list too long"]],
    [-13, ["EACCES", "permission denied"]],
    [-98, ["EADDRINUSE", "address already in use"]],
    [-99, ["EADDRNOTAVAIL", "address not available"]],
    [-97, ["EAFNOSUPPORT", "address family not supported"]],
    [-11, ["EAGAIN", "resource temporarily unavailable"]],
    [-3000, ["EAI_ADDRFAMILY", "address family not supported"]],
    [-3001, ["EAI_AGAIN", "temporary failure"]],
    [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
    [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
    [-3003, ["EAI_CANCELED", "request canceled"]],
    [-3004, ["EAI_FAIL", "permanent failure"]],
    [-3005, ["EAI_FAMILY", "ai_family not supported"]],
    [-3006, ["EAI_MEMORY", "out of memory"]],
    [-3007, ["EAI_NODATA", "no address"]],
    [-3008, ["EAI_NONAME", "unknown node or service"]],
    [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
    [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
    [-3010, ["EAI_SERVICE", "service not available for socket type"]],
    [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
    [-114, ["EALREADY", "connection already in progress"]],
    [-9, ["EBADF", "bad file descriptor"]],
    [-16, ["EBUSY", "resource busy or locked"]],
    [-125, ["ECANCELED", "operation canceled"]],
    [-4080, ["ECHARSET", "invalid Unicode character"]],
    [-103, ["ECONNABORTED", "software caused connection abort"]],
    [-111, ["ECONNREFUSED", "connection refused"]],
    [-104, ["ECONNRESET", "connection reset by peer"]],
    [-89, ["EDESTADDRREQ", "destination address required"]],
    [-17, ["EEXIST", "file already exists"]],
    [-14, ["EFAULT", "bad address in system call argument"]],
    [-27, ["EFBIG", "file too large"]],
    [-113, ["EHOSTUNREACH", "host is unreachable"]],
    [-4, ["EINTR", "interrupted system call"]],
    [-22, ["EINVAL", "invalid argument"]],
    [-5, ["EIO", "i/o error"]],
    [-106, ["EISCONN", "socket is already connected"]],
    [-21, ["EISDIR", "illegal operation on a directory"]],
    [-40, ["ELOOP", "too many symbolic links encountered"]],
    [-24, ["EMFILE", "too many open files"]],
    [-90, ["EMSGSIZE", "message too long"]],
    [-36, ["ENAMETOOLONG", "name too long"]],
    [-100, ["ENETDOWN", "network is down"]],
    [-101, ["ENETUNREACH", "network is unreachable"]],
    [-23, ["ENFILE", "file table overflow"]],
    [-105, ["ENOBUFS", "no buffer space available"]],
    [-19, ["ENODEV", "no such device"]],
    [-2, ["ENOENT", "no such file or directory"]],
    [-12, ["ENOMEM", "not enough memory"]],
    [-64, ["ENONET", "machine is not on the network"]],
    [-92, ["ENOPROTOOPT", "protocol not available"]],
    [-28, ["ENOSPC", "no space left on device"]],
    [-38, ["ENOSYS", "function not implemented"]],
    [-107, ["ENOTCONN", "socket is not connected"]],
    [-20, ["ENOTDIR", "not a directory"]],
    [-39, ["ENOTEMPTY", "directory not empty"]],
    [-88, ["ENOTSOCK", "socket operation on non-socket"]],
    [-95, ["ENOTSUP", "operation not supported on socket"]],
    [-1, ["EPERM", "operation not permitted"]],
    [-32, ["EPIPE", "broken pipe"]],
    [-71, ["EPROTO", "protocol error"]],
    [-93, ["EPROTONOSUPPORT", "protocol not supported"]],
    [-91, ["EPROTOTYPE", "protocol wrong type for socket"]],
    [-34, ["ERANGE", "result too large"]],
    [-30, ["EROFS", "read-only file system"]],
    [-108, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
    [-29, ["ESPIPE", "invalid seek"]],
    [-3, ["ESRCH", "no such process"]],
    [-110, ["ETIMEDOUT", "connection timed out"]],
    [-26, ["ETXTBSY", "text file is busy"]],
    [-18, ["EXDEV", "cross-device link not permitted"]],
    [-4094, ["UNKNOWN", "unknown error"]],
    [-4095, ["EOF", "end of file"]],
    [-6, ["ENXIO", "no such device or address"]],
    [-31, ["EMLINK", "too many links"]],
    [-112, ["EHOSTDOWN", "host is down"]],
    [-121, ["EREMOTEIO", "remote I/O error"]],
    [-25, ["ENOTTY", "inappropriate ioctl for device"]],
    [-4028, ["EFTYPE", "inappropriate file type or format"]],
    [-84, ["EILSEQ", "illegal byte sequence"]],
]
const errorToCodeLinux = codeToErrorLinux.map(([status, [code]]) => [code, status])
const codeToErrorFreebsd = [
    [-7, ["E2BIG", "argument list too long"]],
    [-13, ["EACCES", "permission denied"]],
    [-48, ["EADDRINUSE", "address already in use"]],
    [-49, ["EADDRNOTAVAIL", "address not available"]],
    [-47, ["EAFNOSUPPORT", "address family not supported"]],
    [-35, ["EAGAIN", "resource temporarily unavailable"]],
    [-3000, ["EAI_ADDRFAMILY", "address family not supported"]],
    [-3001, ["EAI_AGAIN", "temporary failure"]],
    [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
    [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
    [-3003, ["EAI_CANCELED", "request canceled"]],
    [-3004, ["EAI_FAIL", "permanent failure"]],
    [-3005, ["EAI_FAMILY", "ai_family not supported"]],
    [-3006, ["EAI_MEMORY", "out of memory"]],
    [-3007, ["EAI_NODATA", "no address"]],
    [-3008, ["EAI_NONAME", "unknown node or service"]],
    [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
    [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
    [-3010, ["EAI_SERVICE", "service not available for socket type"]],
    [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
    [-37, ["EALREADY", "connection already in progress"]],
    [-9, ["EBADF", "bad file descriptor"]],
    [-16, ["EBUSY", "resource busy or locked"]],
    [-85, ["ECANCELED", "operation canceled"]],
    [-4080, ["ECHARSET", "invalid Unicode character"]],
    [-53, ["ECONNABORTED", "software caused connection abort"]],
    [-61, ["ECONNREFUSED", "connection refused"]],
    [-54, ["ECONNRESET", "connection reset by peer"]],
    [-39, ["EDESTADDRREQ", "destination address required"]],
    [-17, ["EEXIST", "file already exists"]],
    [-14, ["EFAULT", "bad address in system call argument"]],
    [-27, ["EFBIG", "file too large"]],
    [-65, ["EHOSTUNREACH", "host is unreachable"]],
    [-4, ["EINTR", "interrupted system call"]],
    [-22, ["EINVAL", "invalid argument"]],
    [-5, ["EIO", "i/o error"]],
    [-56, ["EISCONN", "socket is already connected"]],
    [-21, ["EISDIR", "illegal operation on a directory"]],
    [-62, ["ELOOP", "too many symbolic links encountered"]],
    [-24, ["EMFILE", "too many open files"]],
    [-40, ["EMSGSIZE", "message too long"]],
    [-63, ["ENAMETOOLONG", "name too long"]],
    [-50, ["ENETDOWN", "network is down"]],
    [-51, ["ENETUNREACH", "network is unreachable"]],
    [-23, ["ENFILE", "file table overflow"]],
    [-55, ["ENOBUFS", "no buffer space available"]],
    [-19, ["ENODEV", "no such device"]],
    [-2, ["ENOENT", "no such file or directory"]],
    [-12, ["ENOMEM", "not enough memory"]],
    [-4056, ["ENONET", "machine is not on the network"]],
    [-42, ["ENOPROTOOPT", "protocol not available"]],
    [-28, ["ENOSPC", "no space left on device"]],
    [-78, ["ENOSYS", "function not implemented"]],
    [-57, ["ENOTCONN", "socket is not connected"]],
    [-20, ["ENOTDIR", "not a directory"]],
    [-66, ["ENOTEMPTY", "directory not empty"]],
    [-38, ["ENOTSOCK", "socket operation on non-socket"]],
    [-45, ["ENOTSUP", "operation not supported on socket"]],
    [-84, ["EOVERFLOW", "value too large for defined data type"]],
    [-1, ["EPERM", "operation not permitted"]],
    [-32, ["EPIPE", "broken pipe"]],
    [-92, ["EPROTO", "protocol error"]],
    [-43, ["EPROTONOSUPPORT", "protocol not supported"]],
    [-41, ["EPROTOTYPE", "protocol wrong type for socket"]],
    [-34, ["ERANGE", "result too large"]],
    [-30, ["EROFS", "read-only file system"]],
    [-58, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
    [-29, ["ESPIPE", "invalid seek"]],
    [-3, ["ESRCH", "no such process"]],
    [-60, ["ETIMEDOUT", "connection timed out"]],
    [-26, ["ETXTBSY", "text file is busy"]],
    [-18, ["EXDEV", "cross-device link not permitted"]],
    [-4094, ["UNKNOWN", "unknown error"]],
    [-4095, ["EOF", "end of file"]],
    [-6, ["ENXIO", "no such device or address"]],
    [-31, ["EMLINK", "too many links"]],
    [-64, ["EHOSTDOWN", "host is down"]],
    [-4030, ["EREMOTEIO", "remote I/O error"]],
    [-25, ["ENOTTY", "inappropriate ioctl for device"]],
    [-79, ["EFTYPE", "inappropriate file type or format"]],
    [-86, ["EILSEQ", "illegal byte sequence"]],
    [-44, ["ESOCKTNOSUPPORT", "socket type not supported"]],
]
const errorToCodeFreebsd = codeToErrorFreebsd.map(([status, [code]]) => [code, status])
const errorMap = new Map(osType === "windows" ? codeToErrorWindows : osType === "darwin" ? codeToErrorDarwin : osType === "linux" ? codeToErrorLinux : osType === "freebsd" ? codeToErrorFreebsd : unreachable())
const codeMap = new Map(osType === "windows" ? errorToCodeWindows : osType === "darwin" ? errorToCodeDarwin : osType === "linux" ? errorToCodeLinux : osType === "freebsd" ? errorToCodeFreebsd : unreachable())
function mapSysErrnoToUvErrno(sysErrno) {
    if (osType === "windows") {
        const code = uvTranslateSysError(sysErrno)
        return codeMap.get(code) ?? -sysErrno
    } else {
        return -sysErrno
    }
}
const UV_EAI_MEMORY = codeMap.get("EAI_MEMORY")
const UV_EBADF = codeMap.get("EBADF")
const UV_EEXIST = codeMap.get("EEXIST")
const UV_EINVAL = codeMap.get("EINVAL")
const UV_ENOENT = codeMap.get("ENOENT")
const UV_ENOTSOCK = codeMap.get("ENOTSOCK")
const UV_UNKNOWN = codeMap.get("UNKNOWN")
const mod = {
    errorMap: errorMap,
    codeMap: codeMap,
    mapSysErrnoToUvErrno: mapSysErrnoToUvErrno,
    UV_EAI_MEMORY: UV_EAI_MEMORY,
    UV_EBADF: UV_EBADF,
    UV_EEXIST: UV_EEXIST,
    UV_EINVAL: UV_EINVAL,
    UV_ENOENT: UV_ENOENT,
    UV_ENOTSOCK: UV_ENOTSOCK,
    UV_UNKNOWN: UV_UNKNOWN,
}
const codes = {}
function notImplemented(msg) {
    const message = msg ? `Not implemented: ${msg}` : "Not implemented"
    throw new Error(message)
}
function warnNotImplemented(msg) {
    const message = msg ? `Warning: Not implemented: ${msg}` : "Warning: Not implemented"
    console.warn(message)
}
TextDecoder
TextEncoder
function spliceOne(list, index) {
    for (; index + 1 < list.length; index++) list[index] = list[index + 1]
    list.pop()
}
function normalizeEncoding(enc) {
    if (enc == null || enc === "utf8" || enc === "utf-8") return "utf8"
    return slowCases(enc)
}
function slowCases(enc) {
    switch (enc.length) {
        case 4:
            if (enc === "UTF8") return "utf8"
            if (enc === "ucs2" || enc === "UCS2") return "utf16le"
            enc = `${enc}`.toLowerCase()
            if (enc === "utf8") return "utf8"
            if (enc === "ucs2") return "utf16le"
            break
        case 3:
            if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
                return "hex"
            }
            break
        case 5:
            if (enc === "ascii") return "ascii"
            if (enc === "ucs-2") return "utf16le"
            if (enc === "UTF-8") return "utf8"
            if (enc === "ASCII") return "ascii"
            if (enc === "UCS-2") return "utf16le"
            enc = `${enc}`.toLowerCase()
            if (enc === "utf-8") return "utf8"
            if (enc === "ascii") return "ascii"
            if (enc === "ucs-2") return "utf16le"
            break
        case 6:
            if (enc === "base64") return "base64"
            if (enc === "latin1" || enc === "binary") return "latin1"
            if (enc === "BASE64") return "base64"
            if (enc === "LATIN1" || enc === "BINARY") return "latin1"
            enc = `${enc}`.toLowerCase()
            if (enc === "base64") return "base64"
            if (enc === "latin1" || enc === "binary") return "latin1"
            break
        case 7:
            if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
                return "utf16le"
            }
            break
        case 8:
            if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
                return "utf16le"
            }
            break
        default:
            if (enc === "") return "utf8"
    }
}
const NumberIsSafeInteger = Number.isSafeInteger
function getSystemErrorName(code) {
    if (typeof code !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE("err", "number", code)
    }
    if (code >= 0 || !NumberIsSafeInteger(code)) {
        throw new codes.ERR_OUT_OF_RANGE("err", "a negative integer", code)
    }
    return errorMap.get(code)?.[0]
}
let DenoCore
const { Deno: Deno1 } = globalThis
if (Deno1?.[Deno1.internal]?.core) {
    DenoCore = Deno1[Deno1.internal].core
} else if (Deno1?.core) {
    DenoCore = Deno1.core
} else {
    DenoCore = {}
}
const core = {
    runMicrotasks:
        DenoCore.runMicrotasks ??
        function () {
            throw new Error("Deno.core.runMicrotasks() is not supported in this environment")
        },
    setHasTickScheduled:
        DenoCore.setHasTickScheduled ??
        function () {
            throw new Error("Deno.core.setHasTickScheduled() is not supported in this environment")
        },
    hasTickScheduled:
        DenoCore.hasTickScheduled ??
        function () {
            throw new Error("Deno.core.hasTickScheduled() is not supported in this environment")
        },
    setNextTickCallback: DenoCore.setNextTickCallback ?? undefined,
    setMacrotaskCallback:
        DenoCore.setMacrotaskCallback ??
        function () {
            throw new Error("Deno.core.setNextTickCallback() is not supported in this environment")
        },
    evalContext:
        DenoCore.evalContext ??
        function (_code, _filename) {
            throw new Error("Deno.core.evalContext is not supported in this environment")
        },
    encode:
        DenoCore.encode ??
        function (chunk) {
            return new TextEncoder().encode(chunk)
        },
    eventLoopHasMoreWork:
        DenoCore.eventLoopHasMoreWork ??
        function () {
            return false
        },
    isProxy:
        DenoCore.isProxy ??
        function () {
            return false
        },
    getPromiseDetails:
        DenoCore.getPromiseDetails ??
        function (_promise) {
            throw new Error("Deno.core.getPromiseDetails is not supported in this environment")
        },
    setPromiseHooks:
        DenoCore.setPromiseHooks ??
        function () {
            throw new Error("Deno.core.setPromiseHooks is not supported in this environment")
        },
    ops: DenoCore.ops ?? {
        op_napi_open(_filename) {
            throw new Error("Node API is not supported in this environment")
        },
    },
}
const _toString = Object.prototype.toString
const _bigIntValueOf = BigInt.prototype.valueOf
const _booleanValueOf = Boolean.prototype.valueOf
const _dateValueOf = Date.prototype.valueOf
const _numberValueOf = Number.prototype.valueOf
const _stringValueOf = String.prototype.valueOf
const _symbolValueOf = Symbol.prototype.valueOf
const _weakMapHas = WeakMap.prototype.has
const _weakSetHas = WeakSet.prototype.has
const _getArrayBufferByteLength = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get
const _getSharedArrayBufferByteLength = globalThis.SharedArrayBuffer ? Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get : undefined
const _getTypedArrayToStringTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get
const _getSetSize = Object.getOwnPropertyDescriptor(Set.prototype, "size").get
const _getMapSize = Object.getOwnPropertyDescriptor(Map.prototype, "size").get
function isObjectLike(value) {
    return value !== null && typeof value === "object"
}
function isAnyArrayBuffer(value) {
    return isArrayBuffer(value) || isSharedArrayBuffer(value)
}
function isArgumentsObject(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === undefined && _toString.call(value) === "[object Arguments]"
}
function isArrayBuffer(value) {
    try {
        _getArrayBufferByteLength.call(value)
        return true
    } catch {
        return false
    }
}
function isAsyncFunction(value) {
    return typeof value === "function" && value[Symbol.toStringTag] === "AsyncFunction"
}
function isBooleanObject(value) {
    if (!isObjectLike(value)) {
        return false
    }
    try {
        _booleanValueOf.call(value)
        return true
    } catch {
        return false
    }
}
function isBoxedPrimitive(value) {
    return isBooleanObject(value) || isStringObject(value) || isNumberObject(value) || isSymbolObject(value) || isBigIntObject(value)
}
function isDataView(value) {
    return ArrayBuffer.isView(value) && _getTypedArrayToStringTag.call(value) === undefined
}
function isDate(value) {
    try {
        _dateValueOf.call(value)
        return true
    } catch {
        return false
    }
}
function isGeneratorFunction(value) {
    return typeof value === "function" && value[Symbol.toStringTag] === "GeneratorFunction"
}
function isGeneratorObject(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === "Generator"
}
function isMap(value) {
    try {
        _getMapSize.call(value)
        return true
    } catch {
        return false
    }
}
function isMapIterator(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === "Map Iterator"
}
function isModuleNamespaceObject(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === "Module"
}
function isNativeError(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === undefined && _toString.call(value) === "[object Error]"
}
function isNumberObject(value) {
    if (!isObjectLike(value)) {
        return false
    }
    try {
        _numberValueOf.call(value)
        return true
    } catch {
        return false
    }
}
function isBigIntObject(value) {
    if (!isObjectLike(value)) {
        return false
    }
    try {
        _bigIntValueOf.call(value)
        return true
    } catch {
        return false
    }
}
function isPromise(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === "Promise"
}
function isProxy(value) {
    return core.isProxy(value)
}
function isRegExp(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === undefined && _toString.call(value) === "[object RegExp]"
}
function isSet(value) {
    try {
        _getSetSize.call(value)
        return true
    } catch {
        return false
    }
}
function isSetIterator(value) {
    return isObjectLike(value) && value[Symbol.toStringTag] === "Set Iterator"
}
function isSharedArrayBuffer(value) {
    if (_getSharedArrayBufferByteLength === undefined) {
        return false
    }
    try {
        _getSharedArrayBufferByteLength.call(value)
        return true
    } catch {
        return false
    }
}
function isStringObject(value) {
    if (!isObjectLike(value)) {
        return false
    }
    try {
        _stringValueOf.call(value)
        return true
    } catch {
        return false
    }
}
function isSymbolObject(value) {
    if (!isObjectLike(value)) {
        return false
    }
    try {
        _symbolValueOf.call(value)
        return true
    } catch {
        return false
    }
}
function isWeakMap(value) {
    try {
        _weakMapHas.call(value, null)
        return true
    } catch {
        return false
    }
}
function isWeakSet(value) {
    try {
        _weakSetHas.call(value, null)
        return true
    } catch {
        return false
    }
}
const __default = {
    isAsyncFunction,
    isGeneratorFunction,
    isAnyArrayBuffer,
    isArrayBuffer,
    isArgumentsObject,
    isBoxedPrimitive,
    isDataView,
    isMap,
    isMapIterator,
    isModuleNamespaceObject,
    isNativeError,
    isPromise,
    isSet,
    isSetIterator,
    isWeakMap,
    isWeakSet,
    isRegExp,
    isDate,
    isStringObject,
    isNumberObject,
    isBooleanObject,
    isBigIntObject,
}
const mod1 = {
    isAnyArrayBuffer: isAnyArrayBuffer,
    isArgumentsObject: isArgumentsObject,
    isArrayBuffer: isArrayBuffer,
    isAsyncFunction: isAsyncFunction,
    isBooleanObject: isBooleanObject,
    isBoxedPrimitive: isBoxedPrimitive,
    isDataView: isDataView,
    isDate: isDate,
    isGeneratorFunction: isGeneratorFunction,
    isGeneratorObject: isGeneratorObject,
    isMap: isMap,
    isMapIterator: isMapIterator,
    isModuleNamespaceObject: isModuleNamespaceObject,
    isNativeError: isNativeError,
    isNumberObject: isNumberObject,
    isBigIntObject: isBigIntObject,
    isPromise: isPromise,
    isProxy: isProxy,
    isRegExp: isRegExp,
    isSet: isSet,
    isSetIterator: isSetIterator,
    isSharedArrayBuffer: isSharedArrayBuffer,
    isStringObject: isStringObject,
    isSymbolObject: isSymbolObject,
    isWeakMap: isWeakMap,
    isWeakSet: isWeakSet,
    default: __default,
}
Symbol("kHandle")
Symbol("kKeyObject")
Symbol("kKeyType")
const _getTypedArrayToStringTag1 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value)
}
function isTypedArray(value) {
    return _getTypedArrayToStringTag1.call(value) !== undefined
}
function isUint8Array(value) {
    return _getTypedArrayToStringTag1.call(value) === "Uint8Array"
}
const { isDate: isDate1, isArgumentsObject: isArgumentsObject1, isBigIntObject: isBigIntObject1, isBooleanObject: isBooleanObject1, isNumberObject: isNumberObject1, isStringObject: isStringObject1, isSymbolObject: isSymbolObject1, isNativeError: isNativeError1, isRegExp: isRegExp1, isAsyncFunction: isAsyncFunction1, isGeneratorFunction: isGeneratorFunction1, isGeneratorObject: isGeneratorObject1, isPromise: isPromise1, isMap: isMap1, isSet: isSet1, isMapIterator: isMapIterator1, isSetIterator: isSetIterator1, isWeakMap: isWeakMap1, isWeakSet: isWeakSet1, isArrayBuffer: isArrayBuffer1, isDataView: isDataView1, isSharedArrayBuffer: isSharedArrayBuffer1, isProxy: isProxy1, isModuleNamespaceObject: isModuleNamespaceObject1, isAnyArrayBuffer: isAnyArrayBuffer1, isBoxedPrimitive: isBoxedPrimitive1 } = mod1
function hideStackFrames(fn) {
    const hidden = "__node_internal_" + fn.name
    Object.defineProperty(fn, "name", {
        value: hidden,
    })
    return fn
}
function normalizeEncoding1(enc) {
    if (enc == null || enc === "utf8" || enc === "utf-8") return "utf8"
    return slowCases1(enc)
}
function slowCases1(enc) {
    switch (enc.length) {
        case 4:
            if (enc === "UTF8") return "utf8"
            if (enc === "ucs2" || enc === "UCS2") return "utf16le"
            enc = `${enc}`.toLowerCase()
            if (enc === "utf8") return "utf8"
            if (enc === "ucs2") return "utf16le"
            break
        case 3:
            if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
                return "hex"
            }
            break
        case 5:
            if (enc === "ascii") return "ascii"
            if (enc === "ucs-2") return "utf16le"
            if (enc === "UTF-8") return "utf8"
            if (enc === "ASCII") return "ascii"
            if (enc === "UCS-2") return "utf16le"
            enc = `${enc}`.toLowerCase()
            if (enc === "utf-8") return "utf8"
            if (enc === "ascii") return "ascii"
            if (enc === "ucs-2") return "utf16le"
            break
        case 6:
            if (enc === "base64") return "base64"
            if (enc === "latin1" || enc === "binary") return "latin1"
            if (enc === "BASE64") return "base64"
            if (enc === "LATIN1" || enc === "BINARY") return "latin1"
            enc = `${enc}`.toLowerCase()
            if (enc === "base64") return "base64"
            if (enc === "latin1" || enc === "binary") return "latin1"
            break
        case 7:
            if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
                return "utf16le"
            }
            break
        case 8:
            if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
                return "utf16le"
            }
            break
        case 9:
            if (enc === "base64url" || enc === "BASE64URL" || `${enc}`.toLowerCase() === "base64url") {
                return "base64url"
            }
            break
        default:
            if (enc === "") return "utf8"
    }
}
function isInt32(value) {
    return value === (value | 0)
}
function isUint32(value) {
    return value === value >>> 0
}
const validateBuffer = hideStackFrames((buffer, name = "buffer") => {
    if (!isArrayBufferView(buffer)) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, ["Buffer", "TypedArray", "DataView"], buffer)
    }
})
hideStackFrames((value, name, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
    if (typeof value !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value)
    }
    if (!Number.isInteger(value)) {
        throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value)
    }
    if (value < min || value > max) {
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
    }
})
const validateObject = hideStackFrames((value, name, options) => {
    const useDefaultOptions = options == null
    const allowArray = useDefaultOptions ? false : options.allowArray
    const allowFunction = useDefaultOptions ? false : options.allowFunction
    const nullable = useDefaultOptions ? false : options.nullable
    if ((!nullable && value === null) || (!allowArray && Array.isArray(value)) || (typeof value !== "object" && (!allowFunction || typeof value !== "function"))) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Object", value)
    }
})
hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
    if (!isInt32(value)) {
        if (typeof value !== "number") {
            throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value)
        }
        if (!Number.isInteger(value)) {
            throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value)
        }
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
    }
    if (value < min || value > max) {
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
    }
})
hideStackFrames((value, name, positive) => {
    if (!isUint32(value)) {
        if (typeof value !== "number") {
            throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value)
        }
        if (!Number.isInteger(value)) {
            throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value)
        }
        const min = positive ? 1 : 0
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && < 4294967296`, value)
    }
    if (positive && value === 0) {
        throw new codes.ERR_OUT_OF_RANGE(name, ">= 1 && < 4294967296", value)
    }
})
function validateString(value, name) {
    if (typeof value !== "string") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "string", value)
    }
}
function validateBoolean(value, name) {
    if (typeof value !== "boolean") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "boolean", value)
    }
}
hideStackFrames((value, name, oneOf) => {
    if (!Array.prototype.includes.call(oneOf, value)) {
        const allowed = Array.prototype.join.call(
            Array.prototype.map.call(oneOf, (v) => (typeof v === "string" ? `'${v}'` : String(v))),
            ", "
        )
        const reason = "must be one of: " + allowed
        throw new codes.ERR_INVALID_ARG_VALUE(name, value, reason)
    }
})
const validateAbortSignal = hideStackFrames((signal, name) => {
    if (signal !== undefined && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal)
    }
})
const validateFunction = hideStackFrames((value, name) => {
    if (typeof value !== "function") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Function", value)
    }
})
hideStackFrames((value, name, minLength = 0) => {
    if (!Array.isArray(value)) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Array", value)
    }
    if (value.length < minLength) {
        const reason = `must be longer than ${minLength}`
        throw new codes.ERR_INVALID_ARG_VALUE(name, value, reason)
    }
})
function guessHandleType(_fd) {
    notImplemented("util.guessHandleType")
}
const isNumericLookup = {}
function isArrayIndex(value) {
    switch (typeof value) {
        case "number":
            return value >= 0 && (value | 0) === value
        case "string": {
            const result = isNumericLookup[value]
            if (result !== void 0) {
                return result
            }
            const length = value.length
            if (length === 0) {
                return (isNumericLookup[value] = false)
            }
            let ch = 0
            let i = 0
            for (; i < length; ++i) {
                ch = value.charCodeAt(i)
                if ((i === 0 && ch === 0x30 && length > 1) || ch < 0x30 || ch > 0x39) {
                    return (isNumericLookup[value] = false)
                }
            }
            return (isNumericLookup[value] = true)
        }
        default:
            return false
    }
}
function getOwnNonIndexProperties(obj, filter) {
    let allProperties = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
    if (Array.isArray(obj)) {
        allProperties = allProperties.filter((k) => !isArrayIndex(k))
    }
    if (filter === 0) {
        return allProperties
    }
    const result = []
    for (const key of allProperties) {
        const desc = Object.getOwnPropertyDescriptor(obj, key)
        if (desc === undefined) {
            continue
        }
        if (filter & 1 && !desc.writable) {
            continue
        }
        if (filter & 2 && !desc.enumerable) {
            continue
        }
        if (filter & 4 && !desc.configurable) {
            continue
        }
        if (filter & 8 && typeof key === "string") {
            continue
        }
        if (filter & 16 && typeof key === "symbol") {
            continue
        }
        result.push(key)
    }
    return result
}
const mod2 = (function () {
    return {
        guessHandleType: guessHandleType,
        ALL_PROPERTIES: 0,
        ONLY_WRITABLE: 1,
        ONLY_ENUMERABLE: 2,
        ONLY_CONFIGURABLE: 4,
        ONLY_ENUM_WRITABLE: 6,
        SKIP_STRINGS: 8,
        SKIP_SYMBOLS: 16,
        isArrayIndex: isArrayIndex,
        getOwnNonIndexProperties: getOwnNonIndexProperties,
    }
})()
const kObjectType = 0
const kArrayExtrasType = 2
const kRejected = 2
const meta = ["\\x00", "\\x01", "\\x02", "\\x03", "\\x04", "\\x05", "\\x06", "\\x07", "\\b", "\\t", "\\n", "\\x0B", "\\f", "\\r", "\\x0E", "\\x0F", "\\x10", "\\x11", "\\x12", "\\x13", "\\x14", "\\x15", "\\x16", "\\x17", "\\x18", "\\x19", "\\x1A", "\\x1B", "\\x1C", "\\x1D", "\\x1E", "\\x1F", "", "", "", "", "", "", "", "\\'", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\x7F", "\\x80", "\\x81", "\\x82", "\\x83", "\\x84", "\\x85", "\\x86", "\\x87", "\\x88", "\\x89", "\\x8A", "\\x8B", "\\x8C", "\\x8D", "\\x8E", "\\x8F", "\\x90", "\\x91", "\\x92", "\\x93", "\\x94", "\\x95", "\\x96", "\\x97", "\\x98", "\\x99", "\\x9A", "\\x9B", "\\x9C", "\\x9D", "\\x9E", "\\x9F"]
const isUndetectableObject = (v) => typeof v === "undefined" && v !== undefined
const strEscapeSequencesRegExp = /[\x00-\x1f\x27\x5c\x7f-\x9f]/
const strEscapeSequencesReplacer = /[\x00-\x1f\x27\x5c\x7f-\x9f]/g
const strEscapeSequencesRegExpSingle = /[\x00-\x1f\x5c\x7f-\x9f]/
const strEscapeSequencesReplacerSingle = /[\x00-\x1f\x5c\x7f-\x9f]/g
const keyStrRegExp = /^[a-zA-Z_][a-zA-Z_0-9]*$/
const numberRegExp = /^(0|[1-9][0-9]*)$/
const nodeModulesRegExp = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g
const classRegExp = /^(\s+[^(]*?)\s*{/
const stripCommentsRegExp = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g
const inspectDefaultOptions = {
    showHidden: false,
    depth: 2,
    colors: false,
    customInspect: true,
    showProxy: false,
    maxArrayLength: 100,
    maxStringLength: 10000,
    breakLength: 80,
    compact: 3,
    sorted: false,
    getters: false,
}
function getUserOptions(ctx, isCrossContext) {
    const ret = {
        stylize: ctx.stylize,
        showHidden: ctx.showHidden,
        depth: ctx.depth,
        colors: ctx.colors,
        customInspect: ctx.customInspect,
        showProxy: ctx.showProxy,
        maxArrayLength: ctx.maxArrayLength,
        maxStringLength: ctx.maxStringLength,
        breakLength: ctx.breakLength,
        compact: ctx.compact,
        sorted: ctx.sorted,
        getters: ctx.getters,
        ...ctx.userOptions,
    }
    if (isCrossContext) {
        Object.setPrototypeOf(ret, null)
        for (const key of Object.keys(ret)) {
            if ((typeof ret[key] === "object" || typeof ret[key] === "function") && ret[key] !== null) {
                delete ret[key]
            }
        }
        ret.stylize = Object.setPrototypeOf((value, flavour) => {
            let stylized
            try {
                stylized = `${ctx.stylize(value, flavour)}`
            } catch {}
            if (typeof stylized !== "string") return value
            return stylized
        }, null)
    }
    return ret
}
function inspect(value, opts) {
    const ctx = {
        budget: {},
        indentationLvl: 0,
        seen: [],
        currentDepth: 0,
        stylize: stylizeNoColor,
        showHidden: inspectDefaultOptions.showHidden,
        depth: inspectDefaultOptions.depth,
        colors: inspectDefaultOptions.colors,
        customInspect: inspectDefaultOptions.customInspect,
        showProxy: inspectDefaultOptions.showProxy,
        maxArrayLength: inspectDefaultOptions.maxArrayLength,
        maxStringLength: inspectDefaultOptions.maxStringLength,
        breakLength: inspectDefaultOptions.breakLength,
        compact: inspectDefaultOptions.compact,
        sorted: inspectDefaultOptions.sorted,
        getters: inspectDefaultOptions.getters,
    }
    if (arguments.length > 1) {
        if (arguments.length > 2) {
            if (arguments[2] !== undefined) {
                ctx.depth = arguments[2]
            }
            if (arguments.length > 3 && arguments[3] !== undefined) {
                ctx.colors = arguments[3]
            }
        }
        if (typeof opts === "boolean") {
            ctx.showHidden = opts
        } else if (opts) {
            const optKeys = Object.keys(opts)
            for (let i = 0; i < optKeys.length; ++i) {
                const key = optKeys[i]
                if (inspectDefaultOptions.hasOwnProperty(key) || key === "stylize") {
                    ctx[key] = opts[key]
                } else if (ctx.userOptions === undefined) {
                    ctx.userOptions = opts
                }
            }
        }
    }
    if (ctx.colors) ctx.stylize = stylizeWithColor
    if (ctx.maxArrayLength === null) ctx.maxArrayLength = Infinity
    if (ctx.maxStringLength === null) ctx.maxStringLength = Infinity
    return formatValue(ctx, value, 0)
}
const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom")
inspect.custom = customInspectSymbol
Object.defineProperty(inspect, "defaultOptions", {
    get() {
        return inspectDefaultOptions
    },
    set(options) {
        validateObject(options, "options")
        return Object.assign(inspectDefaultOptions, options)
    },
})
const defaultFG = 39
const defaultBG = 49
inspect.colors = Object.assign(Object.create(null), {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    blink: [5, 25],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    doubleunderline: [21, 24],
    black: [30, defaultFG],
    red: [31, defaultFG],
    green: [32, defaultFG],
    yellow: [33, defaultFG],
    blue: [34, defaultFG],
    magenta: [35, defaultFG],
    cyan: [36, defaultFG],
    white: [37, defaultFG],
    bgBlack: [40, defaultBG],
    bgRed: [41, defaultBG],
    bgGreen: [42, defaultBG],
    bgYellow: [43, defaultBG],
    bgBlue: [44, defaultBG],
    bgMagenta: [45, defaultBG],
    bgCyan: [46, defaultBG],
    bgWhite: [47, defaultBG],
    framed: [51, 54],
    overlined: [53, 55],
    gray: [90, defaultFG],
    redBright: [91, defaultFG],
    greenBright: [92, defaultFG],
    yellowBright: [93, defaultFG],
    blueBright: [94, defaultFG],
    magentaBright: [95, defaultFG],
    cyanBright: [96, defaultFG],
    whiteBright: [97, defaultFG],
    bgGray: [100, defaultBG],
    bgRedBright: [101, defaultBG],
    bgGreenBright: [102, defaultBG],
    bgYellowBright: [103, defaultBG],
    bgBlueBright: [104, defaultBG],
    bgMagentaBright: [105, defaultBG],
    bgCyanBright: [106, defaultBG],
    bgWhiteBright: [107, defaultBG],
})
function defineColorAlias(target, alias) {
    Object.defineProperty(inspect.colors, alias, {
        get() {
            return this[target]
        },
        set(value) {
            this[target] = value
        },
        configurable: true,
        enumerable: false,
    })
}
defineColorAlias("gray", "grey")
defineColorAlias("gray", "blackBright")
defineColorAlias("bgGray", "bgGrey")
defineColorAlias("bgGray", "bgBlackBright")
defineColorAlias("dim", "faint")
defineColorAlias("strikethrough", "crossedout")
defineColorAlias("strikethrough", "strikeThrough")
defineColorAlias("strikethrough", "crossedOut")
defineColorAlias("hidden", "conceal")
defineColorAlias("inverse", "swapColors")
defineColorAlias("inverse", "swapcolors")
defineColorAlias("doubleunderline", "doubleUnderline")
inspect.styles = Object.assign(Object.create(null), {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red",
    module: "underline",
})
function addQuotes(str, quotes) {
    if (quotes === -1) {
        return `"${str}"`
    }
    if (quotes === -2) {
        return `\`${str}\``
    }
    return `'${str}'`
}
const escapeFn = (str) => meta[str.charCodeAt(0)]
function strEscape(str) {
    let escapeTest = strEscapeSequencesRegExp
    let escapeReplace = strEscapeSequencesReplacer
    let singleQuote = 39
    if (str.includes("'")) {
        if (!str.includes('"')) {
            singleQuote = -1
        } else if (!str.includes("`") && !str.includes("${")) {
            singleQuote = -2
        }
        if (singleQuote !== 39) {
            escapeTest = strEscapeSequencesRegExpSingle
            escapeReplace = strEscapeSequencesReplacerSingle
        }
    }
    if (str.length < 5000 && !escapeTest.test(str)) {
        return addQuotes(str, singleQuote)
    }
    if (str.length > 100) {
        str = str.replace(escapeReplace, escapeFn)
        return addQuotes(str, singleQuote)
    }
    let result = ""
    let last = 0
    const lastIndex = str.length
    for (let i = 0; i < lastIndex; i++) {
        const point = str.charCodeAt(i)
        if (point === singleQuote || point === 92 || point < 32 || (point > 126 && point < 160)) {
            if (last === i) {
                result += meta[point]
            } else {
                result += `${str.slice(last, i)}${meta[point]}`
            }
            last = i + 1
        }
    }
    if (last !== lastIndex) {
        result += str.slice(last)
    }
    return addQuotes(result, singleQuote)
}
function stylizeWithColor(str, styleType) {
    const style = inspect.styles[styleType]
    if (style !== undefined) {
        const color = inspect.colors[style]
        if (color !== undefined) {
            return `\u001b[${color[0]}m${str}\u001b[${color[1]}m`
        }
    }
    return str
}
function stylizeNoColor(str) {
    return str
}
function formatValue(ctx, value, recurseTimes, typedArray) {
    if (typeof value !== "object" && typeof value !== "function" && !isUndetectableObject(value)) {
        return formatPrimitive(ctx.stylize, value, ctx)
    }
    if (value === null) {
        return ctx.stylize("null", "null")
    }
    const context = value
    const proxy = undefined
    if (ctx.customInspect) {
        const maybeCustom = value[customInspectSymbol]
        if (typeof maybeCustom === "function" && maybeCustom !== inspect && !(value.constructor && value.constructor.prototype === value)) {
            const depth = ctx.depth === null ? null : ctx.depth - recurseTimes
            const isCrossContext = proxy !== undefined || !(context instanceof Object)
            const ret = maybeCustom.call(context, depth, getUserOptions(ctx, isCrossContext))
            if (ret !== context) {
                if (typeof ret !== "string") {
                    return formatValue(ctx, ret, recurseTimes)
                }
                return ret.replace(/\n/g, `\n${" ".repeat(ctx.indentationLvl)}`)
            }
        }
    }
    if (ctx.seen.includes(value)) {
        let index = 1
        if (ctx.circular === undefined) {
            ctx.circular = new Map()
            ctx.circular.set(value, index)
        } else {
            index = ctx.circular.get(value)
            if (index === undefined) {
                index = ctx.circular.size + 1
                ctx.circular.set(value, index)
            }
        }
        return ctx.stylize(`[Circular *${index}]`, "special")
    }
    return formatRaw(ctx, value, recurseTimes, typedArray)
}
function formatRaw(ctx, value, recurseTimes, typedArray) {
    let keys
    let protoProps
    if (ctx.showHidden && (recurseTimes <= ctx.depth || ctx.depth === null)) {
        protoProps = []
    }
    const constructor = getConstructorName(value, ctx, recurseTimes, protoProps)
    if (protoProps !== undefined && protoProps.length === 0) {
        protoProps = undefined
    }
    let tag = value[Symbol.toStringTag]
    if (typeof tag !== "string") {
        tag = ""
    }
    let base = ""
    let formatter = getEmptyFormatArray
    let braces
    let noIterator = true
    let i = 0
    const filter = ctx.showHidden ? 0 : 2
    let extrasType = 0
    if (value[Symbol.iterator] || constructor === null) {
        noIterator = false
        if (Array.isArray(value)) {
            const prefix = constructor !== "Array" || tag !== "" ? getPrefix(constructor, tag, "Array", `(${value.length})`) : ""
            keys = getOwnNonIndexProperties(value, filter)
            braces = [`${prefix}[`, "]"]
            if (value.length === 0 && keys.length === 0 && protoProps === undefined) {
                return `${braces[0]}]`
            }
            extrasType = kArrayExtrasType
            formatter = formatArray
        } else if (isSet1(value)) {
            const size = value.size
            const prefix = getPrefix(constructor, tag, "Set", `(${size})`)
            keys = getKeys(value, ctx.showHidden)
            formatter = constructor !== null ? formatSet.bind(null, value) : formatSet.bind(null, value.values())
            if (size === 0 && keys.length === 0 && protoProps === undefined) {
                return `${prefix}{}`
            }
            braces = [`${prefix}{`, "}"]
        } else if (isMap1(value)) {
            const size = value.size
            const prefix = getPrefix(constructor, tag, "Map", `(${size})`)
            keys = getKeys(value, ctx.showHidden)
            formatter = constructor !== null ? formatMap.bind(null, value) : formatMap.bind(null, value.entries())
            if (size === 0 && keys.length === 0 && protoProps === undefined) {
                return `${prefix}{}`
            }
            braces = [`${prefix}{`, "}"]
        } else if (isTypedArray(value)) {
            keys = getOwnNonIndexProperties(value, filter)
            const bound = value
            const fallback = ""
            if (constructor === null) {
            }
            const size = value.length
            const prefix = getPrefix(constructor, tag, fallback, `(${size})`)
            braces = [`${prefix}[`, "]"]
            if (value.length === 0 && keys.length === 0 && !ctx.showHidden) {
                return `${braces[0]}]`
            }
            formatter = formatTypedArray.bind(null, bound, size)
            extrasType = kArrayExtrasType
        } else if (isMapIterator1(value)) {
            keys = getKeys(value, ctx.showHidden)
            braces = getIteratorBraces("Map", tag)
            formatter = formatIterator.bind(null, braces)
        } else if (isSetIterator1(value)) {
            keys = getKeys(value, ctx.showHidden)
            braces = getIteratorBraces("Set", tag)
            formatter = formatIterator.bind(null, braces)
        } else {
            noIterator = true
        }
    }
    if (noIterator) {
        keys = getKeys(value, ctx.showHidden)
        braces = ["{", "}"]
        if (constructor === "Object") {
            if (isArgumentsObject1(value)) {
                braces[0] = "[Arguments] {"
            } else if (tag !== "") {
                braces[0] = `${getPrefix(constructor, tag, "Object")}{`
            }
            if (keys.length === 0 && protoProps === undefined) {
                return `${braces[0]}}`
            }
        } else if (typeof value === "function") {
            base = getFunctionBase(value, constructor, tag)
            if (keys.length === 0 && protoProps === undefined) {
                return ctx.stylize(base, "special")
            }
        } else if (isRegExp1(value)) {
            base = RegExp(constructor !== null ? value : new RegExp(value)).toString()
            const prefix = getPrefix(constructor, tag, "RegExp")
            if (prefix !== "RegExp ") {
                base = `${prefix}${base}`
            }
            if ((keys.length === 0 && protoProps === undefined) || (recurseTimes > ctx.depth && ctx.depth !== null)) {
                return ctx.stylize(base, "regexp")
            }
        } else if (isDate1(value)) {
            base = Number.isNaN(value.getTime()) ? value.toString() : value.toISOString()
            const prefix = getPrefix(constructor, tag, "Date")
            if (prefix !== "Date ") {
                base = `${prefix}${base}`
            }
            if (keys.length === 0 && protoProps === undefined) {
                return ctx.stylize(base, "date")
            }
        } else if (value instanceof Error) {
            base = formatError(value, constructor, tag, ctx, keys)
            if (keys.length === 0 && protoProps === undefined) {
                return base
            }
        } else if (isAnyArrayBuffer1(value)) {
            const arrayType = isArrayBuffer1(value) ? "ArrayBuffer" : "SharedArrayBuffer"
            const prefix = getPrefix(constructor, tag, arrayType)
            if (typedArray === undefined) {
                formatter = formatArrayBuffer
            } else if (keys.length === 0 && protoProps === undefined) {
                return prefix + `{ byteLength: ${formatNumber(ctx.stylize, value.byteLength)} }`
            }
            braces[0] = `${prefix}{`
            Array.prototype.unshift.call(keys, "byteLength")
        } else if (isDataView1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "DataView")}{`
            Array.prototype.unshift.call(keys, "byteLength", "byteOffset", "buffer")
        } else if (isPromise1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "Promise")}{`
            formatter = formatPromise
        } else if (isWeakSet1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "WeakSet")}{`
            formatter = ctx.showHidden ? formatWeakSet : formatWeakCollection
        } else if (isWeakMap1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "WeakMap")}{`
            formatter = ctx.showHidden ? formatWeakMap : formatWeakCollection
        } else if (isModuleNamespaceObject1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "Module")}{`
            formatter = formatNamespaceObject.bind(null, keys)
        } else if (isBoxedPrimitive1(value)) {
            base = getBoxedBase(value, ctx, keys, constructor, tag)
            if (keys.length === 0 && protoProps === undefined) {
                return base
            }
        } else {
            if (keys.length === 0 && protoProps === undefined) {
                return `${getCtxStyle(value, constructor, tag)}{}`
            }
            braces[0] = `${getCtxStyle(value, constructor, tag)}{`
        }
    }
    if (recurseTimes > ctx.depth && ctx.depth !== null) {
        let constructorName = getCtxStyle(value, constructor, tag).slice(0, -1)
        if (constructor !== null) {
            constructorName = `[${constructorName}]`
        }
        return ctx.stylize(constructorName, "special")
    }
    recurseTimes += 1
    ctx.seen.push(value)
    ctx.currentDepth = recurseTimes
    let output
    const indentationLvl = ctx.indentationLvl
    try {
        output = formatter(ctx, value, recurseTimes)
        for (i = 0; i < keys.length; i++) {
            output.push(formatProperty(ctx, value, recurseTimes, keys[i], extrasType))
        }
        if (protoProps !== undefined) {
            output.push(...protoProps)
        }
    } catch (err) {
        const constructorName = getCtxStyle(value, constructor, tag).slice(0, -1)
        return handleMaxCallStackSize(ctx, err, constructorName, indentationLvl)
    }
    if (ctx.circular !== undefined) {
        const index = ctx.circular.get(value)
        if (index !== undefined) {
            const reference = ctx.stylize(`<ref *${index}>`, "special")
            if (ctx.compact !== true) {
                base = base === "" ? reference : `${reference} ${base}`
            } else {
                braces[0] = `${reference} ${braces[0]}`
            }
        }
    }
    ctx.seen.pop()
    if (ctx.sorted) {
        const comparator = ctx.sorted === true ? undefined : ctx.sorted
        if (extrasType === 0) {
            output = output.sort(comparator)
        } else if (keys.length > 1) {
            const sorted = output.slice(output.length - keys.length).sort(comparator)
            output.splice(output.length - keys.length, keys.length, ...sorted)
        }
    }
    const res = reduceToSingleString(ctx, output, base, braces, extrasType, recurseTimes, value)
    const budget = ctx.budget[ctx.indentationLvl] || 0
    const newLength = budget + res.length
    ctx.budget[ctx.indentationLvl] = newLength
    if (newLength > 2 ** 27) {
        ctx.depth = -1
    }
    return res
}
const builtInObjects = new Set(Object.getOwnPropertyNames(globalThis).filter((e) => /^[A-Z][a-zA-Z0-9]+$/.test(e)))
function addPrototypeProperties(ctx, main, obj, recurseTimes, output) {
    let depth = 0
    let keys
    let keySet
    do {
        if (depth !== 0 || main === obj) {
            obj = Object.getPrototypeOf(obj)
            if (obj === null) {
                return
            }
            const descriptor = Object.getOwnPropertyDescriptor(obj, "constructor")
            if (descriptor !== undefined && typeof descriptor.value === "function" && builtInObjects.has(descriptor.value.name)) {
                return
            }
        }
        if (depth === 0) {
            keySet = new Set()
        } else {
            Array.prototype.forEach.call(keys, (key) => keySet.add(key))
        }
        keys = Reflect.ownKeys(obj)
        Array.prototype.push.call(ctx.seen, main)
        for (const key of keys) {
            if (key === "constructor" || main.hasOwnProperty(key) || (depth !== 0 && keySet.has(key))) {
                continue
            }
            const desc = Object.getOwnPropertyDescriptor(obj, key)
            if (typeof desc.value === "function") {
                continue
            }
            const value = formatProperty(ctx, obj, recurseTimes, key, 0, desc, main)
            if (ctx.colors) {
                Array.prototype.push.call(output, `\u001b[2m${value}\u001b[22m`)
            } else {
                Array.prototype.push.call(output, value)
            }
        }
        Array.prototype.pop.call(ctx.seen)
    } while (++depth !== 3)
}
function getConstructorName(obj, ctx, recurseTimes, protoProps) {
    let firstProto
    const tmp = obj
    while (obj || isUndetectableObject(obj)) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, "constructor")
        if (descriptor !== undefined && typeof descriptor.value === "function" && descriptor.value.name !== "" && isInstanceof(tmp, descriptor.value)) {
            if (protoProps !== undefined && (firstProto !== obj || !builtInObjects.has(descriptor.value.name))) {
                addPrototypeProperties(ctx, tmp, firstProto || tmp, recurseTimes, protoProps)
            }
            return descriptor.value.name
        }
        obj = Object.getPrototypeOf(obj)
        if (firstProto === undefined) {
            firstProto = obj
        }
    }
    if (firstProto === null) {
        return null
    }
    const res = undefined
    if (recurseTimes > ctx.depth && ctx.depth !== null) {
        return `${res} <Complex prototype>`
    }
    const protoConstr = getConstructorName(firstProto, ctx, recurseTimes + 1, protoProps)
    if (protoConstr === null) {
        return `${res} <${inspect(firstProto, {
            ...ctx,
            customInspect: false,
            depth: -1,
        })}>`
    }
    return `${res} <${protoConstr}>`
}
function formatPrimitive(fn, value, ctx) {
    if (typeof value === "string") {
        let trailer = ""
        if (value.length > ctx.maxStringLength) {
            const remaining = value.length - ctx.maxStringLength
            value = value.slice(0, ctx.maxStringLength)
            trailer = `... ${remaining} more character${remaining > 1 ? "s" : ""}`
        }
        if (ctx.compact !== true && value.length > 16 && value.length > ctx.breakLength - ctx.indentationLvl - 4) {
            return (
                value
                    .split(/(?<=\n)/)
                    .map((line) => fn(strEscape(line), "string"))
                    .join(` +\n${" ".repeat(ctx.indentationLvl + 2)}`) + trailer
            )
        }
        return fn(strEscape(value), "string") + trailer
    }
    if (typeof value === "number") {
        return formatNumber(fn, value)
    }
    if (typeof value === "bigint") {
        return formatBigInt(fn, value)
    }
    if (typeof value === "boolean") {
        return fn(`${value}`, "boolean")
    }
    if (typeof value === "undefined") {
        return fn("undefined", "undefined")
    }
    return fn(value.toString(), "symbol")
}
function getEmptyFormatArray() {
    return []
}
function isInstanceof(object, proto) {
    try {
        return object instanceof proto
    } catch {
        return false
    }
}
function getPrefix(constructor, tag, fallback, size = "") {
    if (constructor === null) {
        if (tag !== "" && fallback !== tag) {
            return `[${fallback}${size}: null prototype] [${tag}] `
        }
        return `[${fallback}${size}: null prototype] `
    }
    if (tag !== "" && constructor !== tag) {
        return `${constructor}${size} [${tag}] `
    }
    return `${constructor}${size} `
}
function formatArray(ctx, value, recurseTimes) {
    const valLen = value.length
    const len = Math.min(Math.max(0, ctx.maxArrayLength), valLen)
    const remaining = valLen - len
    const output = []
    for (let i = 0; i < len; i++) {
        if (!value.hasOwnProperty(i)) {
            return formatSpecialArray(ctx, value, recurseTimes, len, output, i)
        }
        output.push(formatProperty(ctx, value, recurseTimes, i, 1))
    }
    if (remaining > 0) {
        output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`)
    }
    return output
}
function getCtxStyle(_value, constructor, tag) {
    let fallback = ""
    if (constructor === null) {
        if (fallback === tag) {
            fallback = "Object"
        }
    }
    return getPrefix(constructor, tag, fallback)
}
function getKeys(value, showHidden) {
    let keys
    const symbols = Object.getOwnPropertySymbols(value)
    if (showHidden) {
        keys = Object.getOwnPropertyNames(value)
        if (symbols.length !== 0) {
            Array.prototype.push.apply(keys, symbols)
        }
    } else {
        try {
            keys = Object.keys(value)
        } catch (_err) {
            keys = Object.getOwnPropertyNames(value)
        }
        if (symbols.length !== 0) {
        }
    }
    return keys
}
function formatSet(value, ctx, _ignored, recurseTimes) {
    const output = []
    ctx.indentationLvl += 2
    for (const v of value) {
        Array.prototype.push.call(output, formatValue(ctx, v, recurseTimes))
    }
    ctx.indentationLvl -= 2
    return output
}
function formatMap(value, ctx, _gnored, recurseTimes) {
    const output = []
    ctx.indentationLvl += 2
    for (const { 0: k, 1: v } of value) {
        output.push(`${formatValue(ctx, k, recurseTimes)} => ${formatValue(ctx, v, recurseTimes)}`)
    }
    ctx.indentationLvl -= 2
    return output
}
function formatTypedArray(value, length, ctx, _ignored, recurseTimes) {
    const maxLength = Math.min(Math.max(0, ctx.maxArrayLength), length)
    const remaining = value.length - maxLength
    const output = new Array(maxLength)
    const elementFormatter = value.length > 0 && typeof value[0] === "number" ? formatNumber : formatBigInt
    for (let i = 0; i < maxLength; ++i) {
        output[i] = elementFormatter(ctx.stylize, value[i])
    }
    if (remaining > 0) {
        output[maxLength] = `... ${remaining} more item${remaining > 1 ? "s" : ""}`
    }
    if (ctx.showHidden) {
        ctx.indentationLvl += 2
        for (const key of ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset", "buffer"]) {
            const str = formatValue(ctx, value[key], recurseTimes, true)
            Array.prototype.push.call(output, `[${key}]: ${str}`)
        }
        ctx.indentationLvl -= 2
    }
    return output
}
function getIteratorBraces(type, tag) {
    if (tag !== `${type} Iterator`) {
        if (tag !== "") {
            tag += "] ["
        }
        tag += `${type} Iterator`
    }
    return [`[${tag}] {`, "}"]
}
function formatIterator(braces, ctx, value, recurseTimes) {
    const { 0: entries, 1: isKeyValue } = value
    if (isKeyValue) {
        braces[0] = braces[0].replace(/ Iterator] {$/, " Entries] {")
        return formatMapIterInner(ctx, recurseTimes, entries, 2)
    }
    return formatSetIterInner(ctx, recurseTimes, entries, 1)
}
function getFunctionBase(value, constructor, tag) {
    const stringified = Function.prototype.toString.call(value)
    if (stringified.slice(0, 5) === "class" && stringified.endsWith("}")) {
        const slice = stringified.slice(5, -1)
        const bracketIndex = slice.indexOf("{")
        if (bracketIndex !== -1 && (!slice.slice(0, bracketIndex).includes("(") || classRegExp.test(slice.replace(stripCommentsRegExp)))) {
            return getClassBase(value, constructor, tag)
        }
    }
    let type = "Function"
    if (isGeneratorFunction1(value)) {
        type = `Generator${type}`
    }
    if (isAsyncFunction1(value)) {
        type = `Async${type}`
    }
    let base = `[${type}`
    if (constructor === null) {
        base += " (null prototype)"
    }
    if (value.name === "") {
        base += " (anonymous)"
    } else {
        base += `: ${value.name}`
    }
    base += "]"
    if (constructor !== type && constructor !== null) {
        base += ` ${constructor}`
    }
    if (tag !== "" && constructor !== tag) {
        base += ` [${tag}]`
    }
    return base
}
function formatError(err, constructor, tag, ctx, keys) {
    const name = err.name != null ? String(err.name) : "Error"
    let len = name.length
    let stack = err.stack ? String(err.stack) : err.toString()
    if (!ctx.showHidden && keys.length !== 0) {
        for (const name of ["name", "message", "stack"]) {
            const index = keys.indexOf(name)
            if (index !== -1 && stack.includes(err[name])) {
                keys.splice(index, 1)
            }
        }
    }
    if (constructor === null || (name.endsWith("Error") && stack.startsWith(name) && (stack.length === len || stack[len] === ":" || stack[len] === "\n"))) {
        let fallback = "Error"
        if (constructor === null) {
            const start = stack.match(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/) || stack.match(/^([a-z_A-Z0-9-]*Error)$/)
            fallback = (start && start[1]) || ""
            len = fallback.length
            fallback = fallback || "Error"
        }
        const prefix = getPrefix(constructor, tag, fallback).slice(0, -1)
        if (name !== prefix) {
            if (prefix.includes(name)) {
                if (len === 0) {
                    stack = `${prefix}: ${stack}`
                } else {
                    stack = `${prefix}${stack.slice(len)}`
                }
            } else {
                stack = `${prefix} [${name}]${stack.slice(len)}`
            }
        }
    }
    let pos = (err.message && stack.indexOf(err.message)) || -1
    if (pos !== -1) {
        pos += err.message.length
    }
    const stackStart = stack.indexOf("\n    at", pos)
    if (stackStart === -1) {
        stack = `[${stack}]`
    } else if (ctx.colors) {
        let newStack = stack.slice(0, stackStart)
        const lines = stack.slice(stackStart + 1).split("\n")
        for (const line of lines) {
            let nodeModule
            newStack += "\n"
            let pos = 0
            while ((nodeModule = nodeModulesRegExp.exec(line))) {
                newStack += line.slice(pos, nodeModule.index + 14)
                newStack += ctx.stylize(nodeModule[1], "module")
                pos = nodeModule.index + nodeModule[0].length
            }
            newStack += pos === 0 ? line : line.slice(pos)
        }
        stack = newStack
    }
    if (ctx.indentationLvl !== 0) {
        const indentation = " ".repeat(ctx.indentationLvl)
        stack = stack.replace(/\n/g, `\n${indentation}`)
    }
    return stack
}
let hexSlice
function formatArrayBuffer(ctx, value) {
    let buffer
    try {
        buffer = new Uint8Array(value)
    } catch {
        return [ctx.stylize("(detached)", "special")]
    }
    let str = hexSlice(buffer, 0, Math.min(ctx.maxArrayLength, buffer.length))
        .replace(/(.{2})/g, "$1 ")
        .trim()
    const remaining = buffer.length - ctx.maxArrayLength
    if (remaining > 0) {
        str += ` ... ${remaining} more byte${remaining > 1 ? "s" : ""}`
    }
    return [`${ctx.stylize("[Uint8Contents]", "special")}: <${str}>`]
}
function formatNumber(fn, value) {
    return fn(Object.is(value, -0) ? "-0" : `${value}`, "number")
}
function formatPromise(ctx, value, recurseTimes) {
    let output
    const { 0: state, 1: result } = value
    if (state === 0) {
        output = [ctx.stylize("<pending>", "special")]
    } else {
        ctx.indentationLvl += 2
        const str = formatValue(ctx, result, recurseTimes)
        ctx.indentationLvl -= 2
        output = [state === kRejected ? `${ctx.stylize("<rejected>", "special")} ${str}` : str]
    }
    return output
}
function formatWeakCollection(ctx) {
    return [ctx.stylize("<items unknown>", "special")]
}
function formatWeakSet(ctx, value, recurseTimes) {
    const entries = value
    return formatSetIterInner(ctx, recurseTimes, entries, 0)
}
function formatWeakMap(ctx, value, recurseTimes) {
    const entries = value
    return formatMapIterInner(ctx, recurseTimes, entries, 0)
}
function formatProperty(ctx, value, recurseTimes, key, type, desc, original = value) {
    let name, str
    let extra = " "
    desc = desc ||
        Object.getOwnPropertyDescriptor(value, key) || {
            value: value[key],
            enumerable: true,
        }
    if (desc.value !== undefined) {
        const diff = ctx.compact !== true || type !== 0 ? 2 : 3
        ctx.indentationLvl += diff
        str = formatValue(ctx, desc.value, recurseTimes)
        if (diff === 3 && ctx.breakLength < getStringWidth(str, ctx.colors)) {
            extra = `\n${" ".repeat(ctx.indentationLvl)}`
        }
        ctx.indentationLvl -= diff
    } else if (desc.get !== undefined) {
        const label = desc.set !== undefined ? "Getter/Setter" : "Getter"
        const s = ctx.stylize
        const sp = "special"
        if (ctx.getters && (ctx.getters === true || (ctx.getters === "get" && desc.set === undefined) || (ctx.getters === "set" && desc.set !== undefined))) {
            try {
                const tmp = desc.get.call(original)
                ctx.indentationLvl += 2
                if (tmp === null) {
                    str = `${s(`[${label}:`, sp)} ${s("null", "null")}${s("]", sp)}`
                } else if (typeof tmp === "object") {
                    str = `${s(`[${label}]`, sp)} ${formatValue(ctx, tmp, recurseTimes)}`
                } else {
                    const primitive = formatPrimitive(s, tmp, ctx)
                    str = `${s(`[${label}:`, sp)} ${primitive}${s("]", sp)}`
                }
                ctx.indentationLvl -= 2
            } catch (err) {
                const message = `<Inspection threw (${err.message})>`
                str = `${s(`[${label}:`, sp)} ${message}${s("]", sp)}`
            }
        } else {
            str = ctx.stylize(`[${label}]`, sp)
        }
    } else if (desc.set !== undefined) {
        str = ctx.stylize("[Setter]", "special")
    } else {
        str = ctx.stylize("undefined", "undefined")
    }
    if (type === 1) {
        return str
    }
    if (typeof key === "symbol") {
        const tmp = key.toString().replace(strEscapeSequencesReplacer, escapeFn)
        name = `[${ctx.stylize(tmp, "symbol")}]`
    } else if (key === "__proto__") {
        name = "['__proto__']"
    } else if (desc.enumerable === false) {
        const tmp = key.replace(strEscapeSequencesReplacer, escapeFn)
        name = `[${tmp}]`
    } else if (keyStrRegExp.test(key)) {
        name = ctx.stylize(key, "name")
    } else {
        name = ctx.stylize(strEscape(key), "string")
    }
    return `${name}:${extra}${str}`
}
function handleMaxCallStackSize(_ctx, _err, _constructorName, _indentationLvl) {}
const colorRegExp = /\u001b\[\d\d?m/g
function removeColors(str) {
    return str.replace(colorRegExp, "")
}
function isBelowBreakLength(ctx, output, start, base) {
    let totalLength = output.length + start
    if (totalLength + output.length > ctx.breakLength) {
        return false
    }
    for (let i = 0; i < output.length; i++) {
        if (ctx.colors) {
            totalLength += removeColors(output[i]).length
        } else {
            totalLength += output[i].length
        }
        if (totalLength > ctx.breakLength) {
            return false
        }
    }
    return base === "" || !base.includes("\n")
}
function formatBigInt(fn, value) {
    return fn(`${value}n`, "bigint")
}
function formatNamespaceObject(keys, ctx, value, recurseTimes) {
    const output = new Array(keys.length)
    for (let i = 0; i < keys.length; i++) {
        try {
            output[i] = formatProperty(ctx, value, recurseTimes, keys[i], kObjectType)
        } catch (_err) {
            const tmp = {
                [keys[i]]: "",
            }
            output[i] = formatProperty(ctx, tmp, recurseTimes, keys[i], kObjectType)
            const pos = output[i].lastIndexOf(" ")
            output[i] = output[i].slice(0, pos + 1) + ctx.stylize("<uninitialized>", "special")
        }
    }
    keys.length = 0
    return output
}
function formatSpecialArray(ctx, value, recurseTimes, maxLength, output, i) {
    const keys = Object.keys(value)
    let index = i
    for (; i < keys.length && output.length < maxLength; i++) {
        const key = keys[i]
        const tmp = +key
        if (tmp > 2 ** 32 - 2) {
            break
        }
        if (`${index}` !== key) {
            if (!numberRegExp.test(key)) {
                break
            }
            const emptyItems = tmp - index
            const ending = emptyItems > 1 ? "s" : ""
            const message = `<${emptyItems} empty item${ending}>`
            output.push(ctx.stylize(message, "undefined"))
            index = tmp
            if (output.length === maxLength) {
                break
            }
        }
        output.push(formatProperty(ctx, value, recurseTimes, key, 1))
        index++
    }
    const remaining = value.length - index
    if (output.length !== maxLength) {
        if (remaining > 0) {
            const ending = remaining > 1 ? "s" : ""
            const message = `<${remaining} empty item${ending}>`
            output.push(ctx.stylize(message, "undefined"))
        }
    } else if (remaining > 0) {
        output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`)
    }
    return output
}
function getBoxedBase(value, ctx, keys, constructor, tag) {
    let type
    if (isNumberObject1(value)) {
        type = "Number"
    } else if (isStringObject1(value)) {
        type = "String"
        keys.splice(0, value.length)
    } else if (isBooleanObject1(value)) {
        type = "Boolean"
    } else if (isBigIntObject1(value)) {
        type = "BigInt"
    } else {
        type = "Symbol"
    }
    let base = `[${type}`
    if (type !== constructor) {
        if (constructor === null) {
            base += " (null prototype)"
        } else {
            base += ` (${constructor})`
        }
    }
    base += `: ${formatPrimitive(stylizeNoColor, value.valueOf(), ctx)}]`
    if (tag !== "" && tag !== constructor) {
        base += ` [${tag}]`
    }
    if (keys.length !== 0 || ctx.stylize === stylizeNoColor) {
        return base
    }
    return ctx.stylize(base, type.toLowerCase())
}
function getClassBase(value, constructor, tag) {
    const hasName = value.hasOwnProperty("name")
    const name = (hasName && value.name) || "(anonymous)"
    let base = `class ${name}`
    if (constructor !== "Function" && constructor !== null) {
        base += ` [${constructor}]`
    }
    if (tag !== "" && constructor !== tag) {
        base += ` [${tag}]`
    }
    if (constructor !== null) {
        const superName = Object.getPrototypeOf(value).name
        if (superName) {
            base += ` extends ${superName}`
        }
    } else {
        base += " extends [null prototype]"
    }
    return `[${base}]`
}
function reduceToSingleString(ctx, output, base, braces, extrasType, recurseTimes, value) {
    if (ctx.compact !== true) {
        if (typeof ctx.compact === "number" && ctx.compact >= 1) {
            const entries = output.length
            if (extrasType === 2 && entries > 6) {
                output = groupArrayElements(ctx, output, value)
            }
            if (ctx.currentDepth - recurseTimes < ctx.compact && entries === output.length) {
                const start = output.length + ctx.indentationLvl + braces[0].length + base.length + 10
                if (isBelowBreakLength(ctx, output, start, base)) {
                    return `${base ? `${base} ` : ""}${braces[0]} ${join(output, ", ")}` + ` ${braces[1]}`
                }
            }
        }
        const indentation = `\n${" ".repeat(ctx.indentationLvl)}`
        return `${base ? `${base} ` : ""}${braces[0]}${indentation}  ` + `${join(output, `,${indentation}  `)}${indentation}${braces[1]}`
    }
    if (isBelowBreakLength(ctx, output, 0, base)) {
        return `${braces[0]}${base ? ` ${base}` : ""} ${join(output, ", ")} ` + braces[1]
    }
    const indentation = " ".repeat(ctx.indentationLvl)
    const ln = base === "" && braces[0].length === 1 ? " " : `${base ? ` ${base}` : ""}\n${indentation}  `
    return `${braces[0]}${ln}${join(output, `,\n${indentation}  `)} ${braces[1]}`
}
function join(output, separator) {
    let str = ""
    if (output.length !== 0) {
        const lastIndex = output.length - 1
        for (let i = 0; i < lastIndex; i++) {
            str += output[i]
            str += separator
        }
        str += output[lastIndex]
    }
    return str
}
function groupArrayElements(ctx, output, value) {
    let totalLength = 0
    let maxLength = 0
    let i = 0
    let outputLength = output.length
    if (ctx.maxArrayLength < output.length) {
        outputLength--
    }
    const separatorSpace = 2
    const dataLen = new Array(outputLength)
    for (; i < outputLength; i++) {
        const len = getStringWidth(output[i], ctx.colors)
        dataLen[i] = len
        totalLength += len + separatorSpace
        if (maxLength < len) {
            maxLength = len
        }
    }
    const actualMax = maxLength + 2
    if (actualMax * 3 + ctx.indentationLvl < ctx.breakLength && (totalLength / actualMax > 5 || maxLength <= 6)) {
        const averageBias = Math.sqrt(actualMax - totalLength / output.length)
        const biasedMax = Math.max(actualMax - 3 - averageBias, 1)
        const columns = Math.min(Math.round(Math.sqrt(2.5 * biasedMax * outputLength) / biasedMax), Math.floor((ctx.breakLength - ctx.indentationLvl) / actualMax), ctx.compact * 4, 15)
        if (columns <= 1) {
            return output
        }
        const tmp = []
        const maxLineLength = []
        for (let i = 0; i < columns; i++) {
            let lineMaxLength = 0
            for (let j = i; j < output.length; j += columns) {
                if (dataLen[j] > lineMaxLength) {
                    lineMaxLength = dataLen[j]
                }
            }
            lineMaxLength += separatorSpace
            maxLineLength[i] = lineMaxLength
        }
        let order = String.prototype.padStart
        if (value !== undefined) {
            for (let i = 0; i < output.length; i++) {
                if (typeof value[i] !== "number" && typeof value[i] !== "bigint") {
                    order = String.prototype.padEnd
                    break
                }
            }
        }
        for (let i = 0; i < outputLength; i += columns) {
            const max = Math.min(i + columns, outputLength)
            let str = ""
            let j = i
            for (; j < max - 1; j++) {
                const padding = maxLineLength[j - i] + output[j].length - dataLen[j]
                str += `${output[j]}, `.padStart(padding, " ")
            }
            if (order === String.prototype.padStart) {
                const padding = maxLineLength[j - i] + output[j].length - dataLen[j] - 2
                str += output[j].padStart(padding, " ")
            } else {
                str += output[j]
            }
            Array.prototype.push.call(tmp, str)
        }
        if (ctx.maxArrayLength < output.length) {
            Array.prototype.push.call(tmp, output[outputLength])
        }
        output = tmp
    }
    return output
}
function formatMapIterInner(ctx, recurseTimes, entries, state) {
    const maxArrayLength = Math.max(ctx.maxArrayLength, 0)
    const len = entries.length / 2
    const remaining = len - maxArrayLength
    const maxLength = Math.min(maxArrayLength, len)
    let output = new Array(maxLength)
    let i = 0
    ctx.indentationLvl += 2
    if (state === 0) {
        for (; i < maxLength; i++) {
            const pos = i * 2
            output[i] = `${formatValue(ctx, entries[pos], recurseTimes)} => ${formatValue(ctx, entries[pos + 1], recurseTimes)}`
        }
        if (!ctx.sorted) {
            output = output.sort()
        }
    } else {
        for (; i < maxLength; i++) {
            const pos = i * 2
            const res = [formatValue(ctx, entries[pos], recurseTimes), formatValue(ctx, entries[pos + 1], recurseTimes)]
            output[i] = reduceToSingleString(ctx, res, "", ["[", "]"], kArrayExtrasType, recurseTimes)
        }
    }
    ctx.indentationLvl -= 2
    if (remaining > 0) {
        output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`)
    }
    return output
}
function formatSetIterInner(ctx, recurseTimes, entries, state) {
    const maxArrayLength = Math.max(ctx.maxArrayLength, 0)
    const maxLength = Math.min(maxArrayLength, entries.length)
    const output = new Array(maxLength)
    ctx.indentationLvl += 2
    for (let i = 0; i < maxLength; i++) {
        output[i] = formatValue(ctx, entries[i], recurseTimes)
    }
    ctx.indentationLvl -= 2
    if (state === 0 && !ctx.sorted) {
        output.sort()
    }
    const remaining = entries.length - maxLength
    if (remaining > 0) {
        Array.prototype.push.call(output, `... ${remaining} more item${remaining > 1 ? "s" : ""}`)
    }
    return output
}
const ansiPattern = "[\\u001B\\u009B][[\\]()#;?]*" + "(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*" + "|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)" + "|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
const ansi = new RegExp(ansiPattern, "g")
function getStringWidth(str, removeControlChars = true) {
    let width = 0
    if (removeControlChars) {
        str = stripVTControlCharacters(str)
    }
    str = str.normalize("NFC")
    for (const __char of str[Symbol.iterator]()) {
        const code = __char.codePointAt(0)
        if (isFullWidthCodePoint(code)) {
            width += 2
        } else if (!isZeroWidthCodePoint(code)) {
            width++
        }
    }
    return width
}
const isFullWidthCodePoint = (code) => {
    return code >= 0x1100 && (code <= 0x115f || code === 0x2329 || code === 0x232a || (code >= 0x2e80 && code <= 0x3247 && code !== 0x303f) || (code >= 0x3250 && code <= 0x4dbf) || (code >= 0x4e00 && code <= 0xa4c6) || (code >= 0xa960 && code <= 0xa97c) || (code >= 0xac00 && code <= 0xd7a3) || (code >= 0xf900 && code <= 0xfaff) || (code >= 0xfe10 && code <= 0xfe19) || (code >= 0xfe30 && code <= 0xfe6b) || (code >= 0xff01 && code <= 0xff60) || (code >= 0xffe0 && code <= 0xffe6) || (code >= 0x1b000 && code <= 0x1b001) || (code >= 0x1f200 && code <= 0x1f251) || (code >= 0x1f300 && code <= 0x1f64f) || (code >= 0x20000 && code <= 0x3fffd))
}
const isZeroWidthCodePoint = (code) => {
    return code <= 0x1f || (code >= 0x7f && code <= 0x9f) || (code >= 0x300 && code <= 0x36f) || (code >= 0x200b && code <= 0x200f) || (code >= 0x20d0 && code <= 0x20ff) || (code >= 0xfe00 && code <= 0xfe0f) || (code >= 0xfe20 && code <= 0xfe2f) || (code >= 0xe0100 && code <= 0xe01ef)
}
function stripVTControlCharacters(str) {
    validateString(str, "str")
    return str.replace(ansi, "")
}
let os
if (Deno.build.os === "darwin") {
    os = {
        UV_UDP_REUSEADDR: 4,
        dlopen: {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 8,
            RTLD_LOCAL: 4,
        },
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 48,
            EADDRNOTAVAIL: 49,
            EAFNOSUPPORT: 47,
            EAGAIN: 35,
            EALREADY: 37,
            EBADF: 9,
            EBADMSG: 94,
            EBUSY: 16,
            ECANCELED: 89,
            ECHILD: 10,
            ECONNABORTED: 53,
            ECONNREFUSED: 61,
            ECONNRESET: 54,
            EDEADLK: 11,
            EDESTADDRREQ: 39,
            EDOM: 33,
            EDQUOT: 69,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 65,
            EIDRM: 90,
            EILSEQ: 92,
            EINPROGRESS: 36,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 56,
            EISDIR: 21,
            ELOOP: 62,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 40,
            EMULTIHOP: 95,
            ENAMETOOLONG: 63,
            ENETDOWN: 50,
            ENETRESET: 52,
            ENETUNREACH: 51,
            ENFILE: 23,
            ENOBUFS: 55,
            ENODATA: 96,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 77,
            ENOLINK: 97,
            ENOMEM: 12,
            ENOMSG: 91,
            ENOPROTOOPT: 42,
            ENOSPC: 28,
            ENOSR: 98,
            ENOSTR: 99,
            ENOSYS: 78,
            ENOTCONN: 57,
            ENOTDIR: 20,
            ENOTEMPTY: 66,
            ENOTSOCK: 38,
            ENOTSUP: 45,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 102,
            EOVERFLOW: 84,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 100,
            EPROTONOSUPPORT: 43,
            EPROTOTYPE: 41,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 70,
            ETIME: 101,
            ETIMEDOUT: 60,
            ETXTBSY: 26,
            EWOULDBLOCK: 35,
            EXDEV: 18,
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 10,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 30,
            SIGSEGV: 11,
            SIGUSR2: 31,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 20,
            SIGCONT: 19,
            SIGSTOP: 17,
            SIGTSTP: 18,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 16,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 23,
            SIGINFO: 29,
            SIGSYS: 12,
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20,
        },
    }
} else if (Deno.build.os === "linux") {
    os = {
        UV_UDP_REUSEADDR: 4,
        dlopen: {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 256,
            RTLD_LOCAL: 0,
            RTLD_DEEPBIND: 8,
        },
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 98,
            EADDRNOTAVAIL: 99,
            EAFNOSUPPORT: 97,
            EAGAIN: 11,
            EALREADY: 114,
            EBADF: 9,
            EBADMSG: 74,
            EBUSY: 16,
            ECANCELED: 125,
            ECHILD: 10,
            ECONNABORTED: 103,
            ECONNREFUSED: 111,
            ECONNRESET: 104,
            EDEADLK: 35,
            EDESTADDRREQ: 89,
            EDOM: 33,
            EDQUOT: 122,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 113,
            EIDRM: 43,
            EILSEQ: 84,
            EINPROGRESS: 115,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 106,
            EISDIR: 21,
            ELOOP: 40,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 90,
            EMULTIHOP: 72,
            ENAMETOOLONG: 36,
            ENETDOWN: 100,
            ENETRESET: 102,
            ENETUNREACH: 101,
            ENFILE: 23,
            ENOBUFS: 105,
            ENODATA: 61,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 37,
            ENOLINK: 67,
            ENOMEM: 12,
            ENOMSG: 42,
            ENOPROTOOPT: 92,
            ENOSPC: 28,
            ENOSR: 63,
            ENOSTR: 60,
            ENOSYS: 38,
            ENOTCONN: 107,
            ENOTDIR: 20,
            ENOTEMPTY: 39,
            ENOTSOCK: 88,
            ENOTSUP: 95,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 95,
            EOVERFLOW: 75,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 71,
            EPROTONOSUPPORT: 93,
            EPROTOTYPE: 91,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 116,
            ETIME: 62,
            ETIMEDOUT: 110,
            ETXTBSY: 26,
            EWOULDBLOCK: 11,
            EXDEV: 18,
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 7,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 10,
            SIGSEGV: 11,
            SIGUSR2: 12,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 17,
            SIGSTKFLT: 16,
            SIGCONT: 18,
            SIGSTOP: 19,
            SIGTSTP: 20,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 23,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 29,
            SIGPOLL: 29,
            SIGPWR: 30,
            SIGSYS: 31,
            SIGUNUSED: 31,
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20,
        },
    }
} else {
    os = {
        UV_UDP_REUSEADDR: 4,
        dlopen: {},
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 100,
            EADDRNOTAVAIL: 101,
            EAFNOSUPPORT: 102,
            EAGAIN: 11,
            EALREADY: 103,
            EBADF: 9,
            EBADMSG: 104,
            EBUSY: 16,
            ECANCELED: 105,
            ECHILD: 10,
            ECONNABORTED: 106,
            ECONNREFUSED: 107,
            ECONNRESET: 108,
            EDEADLK: 36,
            EDESTADDRREQ: 109,
            EDOM: 33,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 110,
            EIDRM: 111,
            EILSEQ: 42,
            EINPROGRESS: 112,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 113,
            EISDIR: 21,
            ELOOP: 114,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 115,
            ENAMETOOLONG: 38,
            ENETDOWN: 116,
            ENETRESET: 117,
            ENETUNREACH: 118,
            ENFILE: 23,
            ENOBUFS: 119,
            ENODATA: 120,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 39,
            ENOLINK: 121,
            ENOMEM: 12,
            ENOMSG: 122,
            ENOPROTOOPT: 123,
            ENOSPC: 28,
            ENOSR: 124,
            ENOSTR: 125,
            ENOSYS: 40,
            ENOTCONN: 126,
            ENOTDIR: 20,
            ENOTEMPTY: 41,
            ENOTSOCK: 128,
            ENOTSUP: 129,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 130,
            EOVERFLOW: 132,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 134,
            EPROTONOSUPPORT: 135,
            EPROTOTYPE: 136,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ETIME: 137,
            ETIMEDOUT: 138,
            ETXTBSY: 139,
            EWOULDBLOCK: 140,
            EXDEV: 18,
            WSAEINTR: 10004,
            WSAEBADF: 10009,
            WSAEACCES: 10013,
            WSAEFAULT: 10014,
            WSAEINVAL: 10022,
            WSAEMFILE: 10024,
            WSAEWOULDBLOCK: 10035,
            WSAEINPROGRESS: 10036,
            WSAEALREADY: 10037,
            WSAENOTSOCK: 10038,
            WSAEDESTADDRREQ: 10039,
            WSAEMSGSIZE: 10040,
            WSAEPROTOTYPE: 10041,
            WSAENOPROTOOPT: 10042,
            WSAEPROTONOSUPPORT: 10043,
            WSAESOCKTNOSUPPORT: 10044,
            WSAEOPNOTSUPP: 10045,
            WSAEPFNOSUPPORT: 10046,
            WSAEAFNOSUPPORT: 10047,
            WSAEADDRINUSE: 10048,
            WSAEADDRNOTAVAIL: 10049,
            WSAENETDOWN: 10050,
            WSAENETUNREACH: 10051,
            WSAENETRESET: 10052,
            WSAECONNABORTED: 10053,
            WSAECONNRESET: 10054,
            WSAENOBUFS: 10055,
            WSAEISCONN: 10056,
            WSAENOTCONN: 10057,
            WSAESHUTDOWN: 10058,
            WSAETOOMANYREFS: 10059,
            WSAETIMEDOUT: 10060,
            WSAECONNREFUSED: 10061,
            WSAELOOP: 10062,
            WSAENAMETOOLONG: 10063,
            WSAEHOSTDOWN: 10064,
            WSAEHOSTUNREACH: 10065,
            WSAENOTEMPTY: 10066,
            WSAEPROCLIM: 10067,
            WSAEUSERS: 10068,
            WSAEDQUOT: 10069,
            WSAESTALE: 10070,
            WSAEREMOTE: 10071,
            WSASYSNOTREADY: 10091,
            WSAVERNOTSUPPORTED: 10092,
            WSANOTINITIALISED: 10093,
            WSAEDISCON: 10101,
            WSAENOMORE: 10102,
            WSAECANCELLED: 10103,
            WSAEINVALIDPROCTABLE: 10104,
            WSAEINVALIDPROVIDER: 10105,
            WSAEPROVIDERFAILEDINIT: 10106,
            WSASYSCALLFAILURE: 10107,
            WSASERVICE_NOT_FOUND: 10108,
            WSATYPE_NOT_FOUND: 10109,
            WSA_E_NO_MORE: 10110,
            WSA_E_CANCELLED: 10111,
            WSAEREFUSED: 10112,
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGILL: 4,
            SIGABRT: 22,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGSEGV: 11,
            SIGTERM: 15,
            SIGBREAK: 21,
            SIGWINCH: 28,
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20,
        },
    }
}
const fs = {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFSOCK: 49152,
    O_CREAT: 512,
    O_EXCL: 2048,
    UV_FS_O_FILEMAP: 0,
    O_NOCTTY: 131072,
    O_TRUNC: 1024,
    O_APPEND: 8,
    O_DIRECTORY: 1048576,
    O_NOFOLLOW: 256,
    O_SYNC: 128,
    O_DSYNC: 4194304,
    O_SYMLINK: 2097152,
    O_NONBLOCK: 4,
    S_IRWXU: 448,
    S_IRUSR: 256,
    S_IWUSR: 128,
    S_IXUSR: 64,
    S_IRWXG: 56,
    S_IRGRP: 32,
    S_IWGRP: 16,
    S_IXGRP: 8,
    S_IRWXO: 7,
    S_IROTH: 4,
    S_IWOTH: 2,
    S_IXOTH: 1,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4,
}
const crypto = {
    OPENSSL_VERSION_NUMBER: 269488319,
    SSL_OP_ALL: 2147485780,
    SSL_OP_ALLOW_NO_DHE_KEX: 1024,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_CISCO_ANYCONNECT: 32768,
    SSL_OP_COOKIE_EXCHANGE: 8192,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
    SSL_OP_EPHEMERAL_RSA: 0,
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
    SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
    SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
    SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
    SSL_OP_NETSCAPE_CA_DN_BUG: 0,
    SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
    SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NO_COMPRESSION: 131072,
    SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 1073741824,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 33554432,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_PKCS1_CHECK_1: 0,
    SSL_OP_PKCS1_CHECK_2: 0,
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
    SSL_OP_SINGLE_DH_USE: 0,
    SSL_OP_SINGLE_ECDH_USE: 0,
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
    SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
    SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
    SSL_OP_TLS_D5_BUG: 0,
    SSL_OP_TLS_ROLLBACK_BUG: 8388608,
    ENGINE_METHOD_RSA: 1,
    ENGINE_METHOD_DSA: 2,
    ENGINE_METHOD_DH: 4,
    ENGINE_METHOD_RAND: 8,
    ENGINE_METHOD_EC: 2048,
    ENGINE_METHOD_CIPHERS: 64,
    ENGINE_METHOD_DIGESTS: 128,
    ENGINE_METHOD_PKEY_METHS: 512,
    ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
    ENGINE_METHOD_ALL: 65535,
    ENGINE_METHOD_NONE: 0,
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    DH_NOT_SUITABLE_GENERATOR: 8,
    ALPN_ENABLED: 1,
    RSA_PKCS1_PADDING: 1,
    RSA_SSLV23_PADDING: 2,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_X931_PADDING: 5,
    RSA_PKCS1_PSS_PADDING: 6,
    RSA_PSS_SALTLEN_DIGEST: -1,
    RSA_PSS_SALTLEN_MAX_SIGN: -2,
    RSA_PSS_SALTLEN_AUTO: -2,
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
    TLS1_VERSION: 769,
    TLS1_1_VERSION: 770,
    TLS1_2_VERSION: 771,
    TLS1_3_VERSION: 772,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    POINT_CONVERSION_HYBRID: 6,
}
const zlib = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_VERSION_ERROR: -6,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    ZLIB_VERNUM: 4784,
    DEFLATE: 1,
    INFLATE: 2,
    GZIP: 3,
    GUNZIP: 4,
    DEFLATERAW: 5,
    INFLATERAW: 6,
    UNZIP: 7,
    BROTLI_DECODE: 8,
    BROTLI_ENCODE: 9,
    Z_MIN_WINDOWBITS: 8,
    Z_MAX_WINDOWBITS: 15,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_MIN_CHUNK: 64,
    Z_MAX_CHUNK: Infinity,
    Z_DEFAULT_CHUNK: 16384,
    Z_MIN_MEMLEVEL: 1,
    Z_MAX_MEMLEVEL: 9,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_MIN_LEVEL: -1,
    Z_MAX_LEVEL: 9,
    Z_DEFAULT_LEVEL: -1,
    BROTLI_OPERATION_PROCESS: 0,
    BROTLI_OPERATION_FLUSH: 1,
    BROTLI_OPERATION_FINISH: 2,
    BROTLI_OPERATION_EMIT_METADATA: 3,
    BROTLI_PARAM_MODE: 0,
    BROTLI_MODE_GENERIC: 0,
    BROTLI_MODE_TEXT: 1,
    BROTLI_MODE_FONT: 2,
    BROTLI_DEFAULT_MODE: 0,
    BROTLI_PARAM_QUALITY: 1,
    BROTLI_MIN_QUALITY: 0,
    BROTLI_MAX_QUALITY: 11,
    BROTLI_DEFAULT_QUALITY: 11,
    BROTLI_PARAM_LGWIN: 2,
    BROTLI_MIN_WINDOW_BITS: 10,
    BROTLI_MAX_WINDOW_BITS: 24,
    BROTLI_LARGE_MAX_WINDOW_BITS: 30,
    BROTLI_DEFAULT_WINDOW: 22,
    BROTLI_PARAM_LGBLOCK: 3,
    BROTLI_MIN_INPUT_BLOCK_BITS: 16,
    BROTLI_MAX_INPUT_BLOCK_BITS: 24,
    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
    BROTLI_PARAM_SIZE_HINT: 5,
    BROTLI_PARAM_LARGE_WINDOW: 6,
    BROTLI_PARAM_NPOSTFIX: 7,
    BROTLI_PARAM_NDIRECT: 8,
    BROTLI_DECODER_RESULT_ERROR: 0,
    BROTLI_DECODER_RESULT_SUCCESS: 1,
    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
    BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
    BROTLI_DECODER_NO_ERROR: 0,
    BROTLI_DECODER_SUCCESS: 1,
    BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
    BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
    BROTLI_DECODER_ERROR_UNREACHABLE: -31,
}
const trace = {
    TRACE_EVENT_PHASE_BEGIN: 66,
    TRACE_EVENT_PHASE_END: 69,
    TRACE_EVENT_PHASE_COMPLETE: 88,
    TRACE_EVENT_PHASE_INSTANT: 73,
    TRACE_EVENT_PHASE_ASYNC_BEGIN: 83,
    TRACE_EVENT_PHASE_ASYNC_STEP_INTO: 84,
    TRACE_EVENT_PHASE_ASYNC_STEP_PAST: 112,
    TRACE_EVENT_PHASE_ASYNC_END: 70,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_BEGIN: 98,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_END: 101,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_INSTANT: 110,
    TRACE_EVENT_PHASE_FLOW_BEGIN: 115,
    TRACE_EVENT_PHASE_FLOW_STEP: 116,
    TRACE_EVENT_PHASE_FLOW_END: 102,
    TRACE_EVENT_PHASE_METADATA: 77,
    TRACE_EVENT_PHASE_COUNTER: 67,
    TRACE_EVENT_PHASE_SAMPLE: 80,
    TRACE_EVENT_PHASE_CREATE_OBJECT: 78,
    TRACE_EVENT_PHASE_SNAPSHOT_OBJECT: 79,
    TRACE_EVENT_PHASE_DELETE_OBJECT: 68,
    TRACE_EVENT_PHASE_MEMORY_DUMP: 118,
    TRACE_EVENT_PHASE_MARK: 82,
    TRACE_EVENT_PHASE_CLOCK_SYNC: 99,
    TRACE_EVENT_PHASE_ENTER_CONTEXT: 40,
    TRACE_EVENT_PHASE_LEAVE_CONTEXT: 41,
    TRACE_EVENT_PHASE_LINK_IDS: 61,
}
const mod3 = {
    os: os,
    fs: fs,
    crypto: crypto,
    zlib: zlib,
    trace: trace,
}
const {
    errno: { ENOTDIR, ENOENT },
} = os
const kIsNodeError = Symbol("kIsNodeError")
const classRegExp1 = /^([A-Z][a-z0-9]*)+$/
const kTypes = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"]
class AbortError extends Error {
    code
    constructor(message = "The operation was aborted", options) {
        if (options !== undefined && typeof options !== "object") {
            throw new codes.ERR_INVALID_ARG_TYPE("options", "Object", options)
        }
        super(message, options)
        this.code = "ABORT_ERR"
        this.name = "AbortError"
    }
}
function addNumericalSeparator(val) {
    let res = ""
    let i = val.length
    const start = val[0] === "-" ? 1 : 0
    for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`
    }
    return `${val.slice(0, i)}${res}`
}
const captureLargerStackTrace = hideStackFrames(function captureLargerStackTrace(err) {
    Error.captureStackTrace(err)
    return err
})
hideStackFrames(function uvExceptionWithHostPort(err, syscall, address, port) {
    const { 0: code, 1: uvmsg } = uvErrmapGet(err) || uvUnmappedError
    const message = `${syscall} ${code}: ${uvmsg}`
    let details = ""
    if (port && port > 0) {
        details = ` ${address}:${port}`
    } else if (address) {
        details = ` ${address}`
    }
    const ex = new Error(`${message}${details}`)
    ex.code = code
    ex.errno = err
    ex.syscall = syscall
    ex.address = address
    if (port) {
        ex.port = port
    }
    return captureLargerStackTrace(ex)
})
const errnoException = hideStackFrames(function errnoException(err, syscall, original) {
    const code = getSystemErrorName(err)
    const message = original ? `${syscall} ${code} ${original}` : `${syscall} ${code}`
    const ex = new Error(message)
    ex.errno = err
    ex.code = code
    ex.syscall = syscall
    return captureLargerStackTrace(ex)
})
function uvErrmapGet(name) {
    return errorMap.get(name)
}
const uvUnmappedError = ["UNKNOWN", "unknown error"]
hideStackFrames(function uvException(ctx) {
    const { 0: code, 1: uvmsg } = uvErrmapGet(ctx.errno) || uvUnmappedError
    let message = `${code}: ${ctx.message || uvmsg}, ${ctx.syscall}`
    let path
    let dest
    if (ctx.path) {
        path = ctx.path.toString()
        message += ` '${path}'`
    }
    if (ctx.dest) {
        dest = ctx.dest.toString()
        message += ` -> '${dest}'`
    }
    const err = new Error(message)
    for (const prop of Object.keys(ctx)) {
        if (prop === "message" || prop === "path" || prop === "dest") {
            continue
        }
        err[prop] = ctx[prop]
    }
    err.code = code
    if (path) {
        err.path = path
    }
    if (dest) {
        err.dest = dest
    }
    return captureLargerStackTrace(err)
})
hideStackFrames(function exceptionWithHostPort(err, syscall, address, port, additional) {
    const code = getSystemErrorName(err)
    let details = ""
    if (port && port > 0) {
        details = ` ${address}:${port}`
    } else if (address) {
        details = ` ${address}`
    }
    if (additional) {
        details += ` - Local (${additional})`
    }
    const ex = new Error(`${syscall} ${code}${details}`)
    ex.errno = err
    ex.code = code
    ex.syscall = syscall
    ex.address = address
    if (port) {
        ex.port = port
    }
    return captureLargerStackTrace(ex)
})
hideStackFrames(function (code, syscall, hostname) {
    let errno
    if (typeof code === "number") {
        errno = code
        if (code === codeMap.get("EAI_NODATA") || code === codeMap.get("EAI_NONAME")) {
            code = "ENOTFOUND"
        } else {
            code = getSystemErrorName(code)
        }
    }
    const message = `${syscall} ${code}${hostname ? ` ${hostname}` : ""}`
    const ex = new Error(message)
    ex.errno = errno
    ex.code = code
    ex.syscall = syscall
    if (hostname) {
        ex.hostname = hostname
    }
    return captureLargerStackTrace(ex)
})
class NodeErrorAbstraction extends Error {
    code
    constructor(name, code, message) {
        super(message)
        this.code = code
        this.name = name
        this.stack = this.stack && `${name} [${this.code}]${this.stack.slice(20)}`
    }
    toString() {
        return `${this.name} [${this.code}]: ${this.message}`
    }
}
class NodeError extends NodeErrorAbstraction {
    constructor(code, message) {
        super(Error.prototype.name, code, message)
    }
}
class NodeRangeError extends NodeErrorAbstraction {
    constructor(code, message) {
        super(RangeError.prototype.name, code, message)
        Object.setPrototypeOf(this, RangeError.prototype)
        this.toString = function () {
            return `${this.name} [${this.code}]: ${this.message}`
        }
    }
}
class NodeTypeError extends NodeErrorAbstraction {
    constructor(code, message) {
        super(TypeError.prototype.name, code, message)
        Object.setPrototypeOf(this, TypeError.prototype)
        this.toString = function () {
            return `${this.name} [${this.code}]: ${this.message}`
        }
    }
}
class NodeSystemError extends NodeErrorAbstraction {
    constructor(key, context, msgPrefix) {
        let message = `${msgPrefix}: ${context.syscall} returned ` + `${context.code} (${context.message})`
        if (context.path !== undefined) {
            message += ` ${context.path}`
        }
        if (context.dest !== undefined) {
            message += ` => ${context.dest}`
        }
        super("SystemError", key, message)
        captureLargerStackTrace(this)
        Object.defineProperties(this, {
            [kIsNodeError]: {
                value: true,
                enumerable: false,
                writable: false,
                configurable: true,
            },
            info: {
                value: context,
                enumerable: true,
                configurable: true,
                writable: false,
            },
            errno: {
                get() {
                    return context.errno
                },
                set: (value) => {
                    context.errno = value
                },
                enumerable: true,
                configurable: true,
            },
            syscall: {
                get() {
                    return context.syscall
                },
                set: (value) => {
                    context.syscall = value
                },
                enumerable: true,
                configurable: true,
            },
        })
        if (context.path !== undefined) {
            Object.defineProperty(this, "path", {
                get() {
                    return context.path
                },
                set: (value) => {
                    context.path = value
                },
                enumerable: true,
                configurable: true,
            })
        }
        if (context.dest !== undefined) {
            Object.defineProperty(this, "dest", {
                get() {
                    return context.dest
                },
                set: (value) => {
                    context.dest = value
                },
                enumerable: true,
                configurable: true,
            })
        }
    }
    toString() {
        return `${this.name} [${this.code}]: ${this.message}`
    }
}
function makeSystemErrorWithCode(key, msgPrfix) {
    return class NodeError extends NodeSystemError {
        constructor(ctx) {
            super(key, ctx, msgPrfix)
        }
    }
}
makeSystemErrorWithCode("ERR_FS_EISDIR", "Path is a directory")
function createInvalidArgType(name, expected) {
    expected = Array.isArray(expected) ? expected : [expected]
    let msg = "The "
    if (name.endsWith(" argument")) {
        msg += `${name} `
    } else {
        const type = name.includes(".") ? "property" : "argument"
        msg += `"${name}" ${type} `
    }
    msg += "must be "
    const types = []
    const instances = []
    const other = []
    for (const value of expected) {
        if (kTypes.includes(value)) {
            types.push(value.toLocaleLowerCase())
        } else if (classRegExp1.test(value)) {
            instances.push(value)
        } else {
            other.push(value)
        }
    }
    if (instances.length > 0) {
        const pos = types.indexOf("object")
        if (pos !== -1) {
            types.splice(pos, 1)
            instances.push("Object")
        }
    }
    if (types.length > 0) {
        if (types.length > 2) {
            const last = types.pop()
            msg += `one of type ${types.join(", ")}, or ${last}`
        } else if (types.length === 2) {
            msg += `one of type ${types[0]} or ${types[1]}`
        } else {
            msg += `of type ${types[0]}`
        }
        if (instances.length > 0 || other.length > 0) {
            msg += " or "
        }
    }
    if (instances.length > 0) {
        if (instances.length > 2) {
            const last = instances.pop()
            msg += `an instance of ${instances.join(", ")}, or ${last}`
        } else {
            msg += `an instance of ${instances[0]}`
            if (instances.length === 2) {
                msg += ` or ${instances[1]}`
            }
        }
        if (other.length > 0) {
            msg += " or "
        }
    }
    if (other.length > 0) {
        if (other.length > 2) {
            const last = other.pop()
            msg += `one of ${other.join(", ")}, or ${last}`
        } else if (other.length === 2) {
            msg += `one of ${other[0]} or ${other[1]}`
        } else {
            if (other[0].toLowerCase() !== other[0]) {
                msg += "an "
            }
            msg += `${other[0]}`
        }
    }
    return msg
}
class ERR_INVALID_ARG_TYPE_RANGE extends NodeRangeError {
    constructor(name, expected, actual) {
        const msg = createInvalidArgType(name, expected)
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`)
    }
}
class ERR_INVALID_ARG_TYPE extends NodeTypeError {
    constructor(name, expected, actual) {
        const msg = createInvalidArgType(name, expected)
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`)
    }
    static RangeError = ERR_INVALID_ARG_TYPE_RANGE
}
class ERR_INVALID_ARG_VALUE_RANGE extends NodeRangeError {
    constructor(name, value, reason = "is invalid") {
        const type = name.includes(".") ? "property" : "argument"
        const inspected = inspect(value)
        super("ERR_INVALID_ARG_VALUE", `The ${type} '${name}' ${reason}. Received ${inspected}`)
    }
}
class ERR_INVALID_ARG_VALUE extends NodeTypeError {
    constructor(name, value, reason = "is invalid") {
        const type = name.includes(".") ? "property" : "argument"
        const inspected = inspect(value)
        super("ERR_INVALID_ARG_VALUE", `The ${type} '${name}' ${reason}. Received ${inspected}`)
    }
    static RangeError = ERR_INVALID_ARG_VALUE_RANGE
}
function invalidArgTypeHelper(input) {
    if (input == null) {
        return ` Received ${input}`
    }
    if (typeof input === "function" && input.name) {
        return ` Received function ${input.name}`
    }
    if (typeof input === "object") {
        if (input.constructor && input.constructor.name) {
            return ` Received an instance of ${input.constructor.name}`
        }
        return ` Received ${inspect(input, {
            depth: -1,
        })}`
    }
    let inspected = inspect(input, {
        colors: false,
    })
    if (inspected.length > 25) {
        inspected = `${inspected.slice(0, 25)}...`
    }
    return ` Received type ${typeof input} (${inspected})`
}
class ERR_OUT_OF_RANGE extends RangeError {
    code = "ERR_OUT_OF_RANGE"
    constructor(str, range, input, replaceDefaultBoolean = false) {
        assert(range, 'Missing "range" argument')
        let msg = replaceDefaultBoolean ? str : `The value of "${str}" is out of range.`
        let received
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input))
        } else if (typeof input === "bigint") {
            received = String(input)
            if (input > 2n ** 32n || input < -(2n ** 32n)) {
                received = addNumericalSeparator(received)
            }
            received += "n"
        } else {
            received = inspect(input)
        }
        msg += ` It must be ${range}. Received ${received}`
        super(msg)
        const { name } = this
        this.name = `${name} [${this.code}]`
        this.stack
        this.name = name
    }
}
class ERR_BUFFER_OUT_OF_BOUNDS extends NodeRangeError {
    constructor(name) {
        super("ERR_BUFFER_OUT_OF_BOUNDS", name ? `"${name}" is outside of buffer bounds` : "Attempt to access memory outside buffer bounds")
    }
}
class ERR_INVALID_CURSOR_POS extends NodeTypeError {
    constructor() {
        super("ERR_INVALID_CURSOR_POS", `Cannot set cursor row without setting its column`)
    }
}
class ERR_IPC_CHANNEL_CLOSED extends NodeError {
    constructor() {
        super("ERR_IPC_CHANNEL_CLOSED", `Channel closed`)
    }
}
class ERR_SOCKET_BAD_PORT extends NodeRangeError {
    constructor(name, port, allowZero = true) {
        assert(typeof allowZero === "boolean", "The 'allowZero' argument must be of type boolean.")
        const operator = allowZero ? ">=" : ">"
        super("ERR_SOCKET_BAD_PORT", `${name} should be ${operator} 0 and < 65536. Received ${port}.`)
    }
}
class ERR_STREAM_PREMATURE_CLOSE extends NodeError {
    constructor() {
        super("ERR_STREAM_PREMATURE_CLOSE", `Premature close`)
    }
}
class ERR_UNHANDLED_ERROR extends NodeError {
    constructor(x) {
        super("ERR_UNHANDLED_ERROR", `Unhandled error. (${x})`)
    }
}
class ERR_UNKNOWN_ENCODING extends NodeTypeError {
    constructor(x) {
        super("ERR_UNKNOWN_ENCODING", `Unknown encoding: ${x}`)
    }
}
class ERR_UNKNOWN_SIGNAL extends NodeTypeError {
    constructor(x) {
        super("ERR_UNKNOWN_SIGNAL", `Unknown signal: ${x}`)
    }
}
function aggregateTwoErrors(innerError, outerError) {
    if (innerError && outerError && innerError !== outerError) {
        if (Array.isArray(outerError.errors)) {
            outerError.errors.push(innerError)
            return outerError
        }
        const err = new AggregateError([outerError, innerError], outerError.message)
        err.code = outerError.code
        return err
    }
    return innerError || outerError
}
codes.ERR_IPC_CHANNEL_CLOSED = ERR_IPC_CHANNEL_CLOSED
codes.ERR_INVALID_ARG_TYPE = ERR_INVALID_ARG_TYPE
codes.ERR_INVALID_ARG_VALUE = ERR_INVALID_ARG_VALUE
codes.ERR_OUT_OF_RANGE = ERR_OUT_OF_RANGE
codes.ERR_SOCKET_BAD_PORT = ERR_SOCKET_BAD_PORT
codes.ERR_BUFFER_OUT_OF_BOUNDS = ERR_BUFFER_OUT_OF_BOUNDS
codes.ERR_UNKNOWN_ENCODING = ERR_UNKNOWN_ENCODING
hideStackFrames(function genericNodeError(message, errorProperties) {
    const err = new Error(message)
    Object.assign(err, errorProperties)
    return err
})
;("use strict")
const kRejection = Symbol.for("nodejs.rejection")
const kCapture = Symbol("kCapture")
const kErrorMonitor = Symbol("events.errorMonitor")
const kMaxEventTargetListeners = Symbol("events.maxEventTargetListeners")
const kMaxEventTargetListenersWarned = Symbol("events.maxEventTargetListenersWarned")
function EventEmitter(opts) {
    EventEmitter.init.call(this, opts)
}
EventEmitter.on = on
EventEmitter.once = once
EventEmitter.getEventListeners = getEventListeners
EventEmitter.setMaxListeners = setMaxListeners
EventEmitter.listenerCount = listenerCount
EventEmitter.EventEmitter = EventEmitter
EventEmitter.usingDomains = false
EventEmitter.captureRejectionSymbol = kRejection
EventEmitter.captureRejectionSymbol
EventEmitter.errorMonitor
Object.defineProperty(EventEmitter, "captureRejections", {
    get() {
        return EventEmitter.prototype[kCapture]
    },
    set(value) {
        validateBoolean(value, "EventEmitter.captureRejections")
        EventEmitter.prototype[kCapture] = value
    },
    enumerable: true,
})
EventEmitter.errorMonitor = kErrorMonitor
Object.defineProperty(EventEmitter.prototype, kCapture, {
    value: false,
    writable: true,
    enumerable: false,
})
EventEmitter.prototype._events = undefined
EventEmitter.prototype._eventsCount = 0
EventEmitter.prototype._maxListeners = undefined
let defaultMaxListeners = 10
function checkListener(listener) {
    validateFunction(listener, "listener")
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
        return defaultMaxListeners
    },
    set: function (arg) {
        if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
            throw new ERR_OUT_OF_RANGE("defaultMaxListeners", "a non-negative number", arg)
        }
        defaultMaxListeners = arg
    },
})
Object.defineProperties(EventEmitter, {
    kMaxEventTargetListeners: {
        value: kMaxEventTargetListeners,
        enumerable: false,
        configurable: false,
        writable: false,
    },
    kMaxEventTargetListenersWarned: {
        value: kMaxEventTargetListenersWarned,
        enumerable: false,
        configurable: false,
        writable: false,
    },
})
function setMaxListeners(n = defaultMaxListeners, ...eventTargets) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
        throw new ERR_OUT_OF_RANGE("n", "a non-negative number", n)
    }
    if (eventTargets.length === 0) {
        defaultMaxListeners = n
    } else {
        for (let i = 0; i < eventTargets.length; i++) {
            const target = eventTargets[i]
            if (target instanceof EventTarget) {
                target[kMaxEventTargetListeners] = n
                target[kMaxEventTargetListenersWarned] = false
            } else if (typeof target.setMaxListeners === "function") {
                target.setMaxListeners(n)
            } else {
                throw new ERR_INVALID_ARG_TYPE("eventTargets", ["EventEmitter", "EventTarget"], target)
            }
        }
    }
}
EventEmitter.init = function (opts) {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null)
        this._eventsCount = 0
    }
    this._maxListeners = this._maxListeners || undefined
    if (opts?.captureRejections) {
        validateBoolean(opts.captureRejections, "options.captureRejections")
        this[kCapture] = Boolean(opts.captureRejections)
    } else {
        this[kCapture] = EventEmitter.prototype[kCapture]
    }
}
function addCatch(that, promise, type, args) {
    if (!that[kCapture]) {
        return
    }
    try {
        const then = promise.then
        if (typeof then === "function") {
            then.call(promise, undefined, function (err) {
                process.nextTick(emitUnhandledRejectionOrErr, that, err, type, args)
            })
        }
    } catch (err) {
        that.emit("error", err)
    }
}
function emitUnhandledRejectionOrErr(ee, err, type, args) {
    if (typeof ee[kRejection] === "function") {
        ee[kRejection](err, type, ...args)
    } else {
        const prev = ee[kCapture]
        try {
            ee[kCapture] = false
            ee.emit("error", err)
        } finally {
            ee[kCapture] = prev
        }
    }
}
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
        throw new ERR_OUT_OF_RANGE("n", "a non-negative number", n)
    }
    this._maxListeners = n
    return this
}
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) {
        return EventEmitter.defaultMaxListeners
    }
    return that._maxListeners
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this)
}
EventEmitter.prototype.emit = function emit(type, ...args) {
    let doError = type === "error"
    const events = this._events
    if (events !== undefined) {
        if (doError && events[kErrorMonitor] !== undefined) {
            this.emit(kErrorMonitor, ...args)
        }
        doError = doError && events.error === undefined
    } else if (!doError) {
        return false
    }
    if (doError) {
        let er
        if (args.length > 0) {
            er = args[0]
        }
        if (er instanceof Error) {
            try {
                const capture = {}
                Error.captureStackTrace(capture, EventEmitter.prototype.emit)
            } catch {}
            throw er
        }
        let stringifiedEr
        try {
            stringifiedEr = inspect(er)
        } catch {
            stringifiedEr = er
        }
        const err = new ERR_UNHANDLED_ERROR(stringifiedEr)
        err.context = er
        throw err
    }
    const handler = events[type]
    if (handler === undefined) {
        return false
    }
    if (typeof handler === "function") {
        const result = handler.apply(this, args)
        if (result !== undefined && result !== null) {
            addCatch(this, result, type, args)
        }
    } else {
        const len = handler.length
        const listeners = arrayClone(handler)
        for (let i = 0; i < len; ++i) {
            const result = listeners[i].apply(this, args)
            if (result !== undefined && result !== null) {
                addCatch(this, result, type, args)
            }
        }
    }
    return true
}
function _addListener(target, type, listener, prepend) {
    let m
    let events
    let existing
    checkListener(listener)
    events = target._events
    if (events === undefined) {
        events = target._events = Object.create(null)
        target._eventsCount = 0
    } else {
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ?? listener)
            events = target._events
        }
        existing = events[type]
    }
    if (existing === undefined) {
        events[type] = listener
        ++target._eventsCount
    } else {
        if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener]
        } else if (prepend) {
            existing.unshift(listener)
        } else {
            existing.push(listener)
        }
        m = _getMaxListeners(target)
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true
            const w = new Error(
                "Possible EventEmitter memory leak detected. " +
                    `${existing.length} ${String(type)} listeners ` +
                    `added to ${inspect(target, {
                        depth: -1,
                    })}. Use ` +
                    "emitter.setMaxListeners() to increase limit"
            )
            w.name = "MaxListenersExceededWarning"
            w.emitter = target
            w.type = type
            w.count = existing.length
            process.emitWarning(w)
        }
    }
    return target
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false)
}
EventEmitter.prototype.on = EventEmitter.prototype.addListener
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true)
}
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn)
        this.fired = true
        if (arguments.length === 0) {
            return this.listener.call(this.target)
        }
        return this.listener.apply(this.target, arguments)
    }
}
function _onceWrap(target, type, listener) {
    const state = {
        fired: false,
        wrapFn: undefined,
        target,
        type,
        listener,
    }
    const wrapped = onceWrapper.bind(state)
    wrapped.listener = listener
    state.wrapFn = wrapped
    return wrapped
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener)
    this.on(type, _onceWrap(this, type, listener))
    return this
}
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener)
    this.prependListener(type, _onceWrap(this, type, listener))
    return this
}
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    checkListener(listener)
    const events = this._events
    if (events === undefined) {
        return this
    }
    const list = events[type]
    if (list === undefined) {
        return this
    }
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) {
            this._events = Object.create(null)
        } else {
            delete events[type]
            if (events.removeListener) {
                this.emit("removeListener", type, list.listener || listener)
            }
        }
    } else if (typeof list !== "function") {
        let position = -1
        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
                position = i
                break
            }
        }
        if (position < 0) {
            return this
        }
        if (position === 0) {
            list.shift()
        } else {
            spliceOne(list, position)
        }
        if (list.length === 1) {
            events[type] = list[0]
        }
        if (events.removeListener !== undefined) {
            this.emit("removeListener", type, listener)
        }
    }
    return this
}
EventEmitter.prototype.off = EventEmitter.prototype.removeListener
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    const events = this._events
    if (events === undefined) {
        return this
    }
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null)
            this._eventsCount = 0
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) {
                this._events = Object.create(null)
            } else {
                delete events[type]
            }
        }
        return this
    }
    if (arguments.length === 0) {
        for (const key of Reflect.ownKeys(events)) {
            if (key === "removeListener") continue
            this.removeAllListeners(key)
        }
        this.removeAllListeners("removeListener")
        this._events = Object.create(null)
        this._eventsCount = 0
        return this
    }
    const listeners = events[type]
    if (typeof listeners === "function") {
        this.removeListener(type, listeners)
    } else if (listeners !== undefined) {
        for (let i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i])
        }
    }
    return this
}
function _listeners(target, type, unwrap) {
    const events = target._events
    if (events === undefined) {
        return []
    }
    const evlistener = events[type]
    if (evlistener === undefined) {
        return []
    }
    if (typeof evlistener === "function") {
        return unwrap ? [evlistener.listener || evlistener] : [evlistener]
    }
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener)
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true)
}
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false)
}
const _listenerCount = function listenerCount(type) {
    const events = this._events
    if (events !== undefined) {
        const evlistener = events[type]
        if (typeof evlistener === "function") {
            return 1
        } else if (evlistener !== undefined) {
            return evlistener.length
        }
    }
    return 0
}
EventEmitter.prototype.listenerCount = _listenerCount
function listenerCount(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type)
    }
    return _listenerCount.call(emitter, type)
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
}
function arrayClone(arr) {
    switch (arr.length) {
        case 2:
            return [arr[0], arr[1]]
        case 3:
            return [arr[0], arr[1], arr[2]]
        case 4:
            return [arr[0], arr[1], arr[2], arr[3]]
        case 5:
            return [arr[0], arr[1], arr[2], arr[3], arr[4]]
        case 6:
            return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]
    }
    return arr.slice()
}
function unwrapListeners(arr) {
    const ret = arrayClone(arr)
    for (let i = 0; i < ret.length; ++i) {
        const orig = ret[i].listener
        if (typeof orig === "function") {
            ret[i] = orig
        }
    }
    return ret
}
function getEventListeners(emitterOrTarget, type) {
    if (typeof emitterOrTarget.listeners === "function") {
        return emitterOrTarget.listeners(type)
    }
    if (emitterOrTarget instanceof EventTarget) {
        const root = emitterOrTarget[kEvents].get(type)
        const listeners = []
        let handler = root?.next
        while (handler?.listener !== undefined) {
            const listener = handler.listener?.deref ? handler.listener.deref() : handler.listener
            listeners.push(listener)
            handler = handler.next
        }
        return listeners
    }
    throw new ERR_INVALID_ARG_TYPE("emitter", ["EventEmitter", "EventTarget"], emitterOrTarget)
}
async function once(emitter, name, options = {}) {
    const signal = options?.signal
    validateAbortSignal(signal, "options.signal")
    if (signal?.aborted) {
        throw new AbortError()
    }
    return new Promise((resolve, reject) => {
        const errorListener = (err) => {
            emitter.removeListener(name, resolver)
            if (signal != null) {
                eventTargetAgnosticRemoveListener(signal, "abort", abortListener)
            }
            reject(err)
        }
        const resolver = (...args) => {
            if (typeof emitter.removeListener === "function") {
                emitter.removeListener("error", errorListener)
            }
            if (signal != null) {
                eventTargetAgnosticRemoveListener(signal, "abort", abortListener)
            }
            resolve(args)
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true,
        })
        if (name !== "error" && typeof emitter.once === "function") {
            emitter.once("error", errorListener)
        }
        function abortListener() {
            eventTargetAgnosticRemoveListener(emitter, name, resolver)
            eventTargetAgnosticRemoveListener(emitter, "error", errorListener)
            reject(new AbortError())
        }
        if (signal != null) {
            eventTargetAgnosticAddListener(signal, "abort", abortListener, {
                once: true,
            })
        }
    })
}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {}).prototype)
function createIterResult(value, done) {
    return {
        value,
        done,
    }
}
function eventTargetAgnosticRemoveListener(emitter, name, listener, flags) {
    if (typeof emitter.removeListener === "function") {
        emitter.removeListener(name, listener)
    } else if (typeof emitter.removeEventListener === "function") {
        emitter.removeEventListener(name, listener, flags)
    } else {
        throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter)
    }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags?.once) {
            emitter.once(name, listener)
        } else {
            emitter.on(name, listener)
        }
    } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(
            name,
            (arg) => {
                listener(arg)
            },
            flags
        )
    } else {
        throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter)
    }
}
function on(emitter, event, options) {
    const signal = options?.signal
    validateAbortSignal(signal, "options.signal")
    if (signal?.aborted) {
        throw new AbortError()
    }
    const unconsumedEvents = []
    const unconsumedPromises = []
    let error = null
    let finished = false
    const iterator = Object.setPrototypeOf(
        {
            next() {
                const value = unconsumedEvents.shift()
                if (value) {
                    return Promise.resolve(createIterResult(value, false))
                }
                if (error) {
                    const p = Promise.reject(error)
                    error = null
                    return p
                }
                if (finished) {
                    return Promise.resolve(createIterResult(undefined, true))
                }
                return new Promise(function (resolve, reject) {
                    unconsumedPromises.push({
                        resolve,
                        reject,
                    })
                })
            },
            return() {
                eventTargetAgnosticRemoveListener(emitter, event, eventHandler)
                eventTargetAgnosticRemoveListener(emitter, "error", errorHandler)
                if (signal) {
                    eventTargetAgnosticRemoveListener(signal, "abort", abortListener, {
                        once: true,
                    })
                }
                finished = true
                for (const promise of unconsumedPromises) {
                    promise.resolve(createIterResult(undefined, true))
                }
                return Promise.resolve(createIterResult(undefined, true))
            },
            throw(err) {
                if (!err || !(err instanceof Error)) {
                    throw new ERR_INVALID_ARG_TYPE("EventEmitter.AsyncIterator", "Error", err)
                }
                error = err
                eventTargetAgnosticRemoveListener(emitter, event, eventHandler)
                eventTargetAgnosticRemoveListener(emitter, "error", errorHandler)
            },
            [Symbol.asyncIterator]() {
                return this
            },
        },
        AsyncIteratorPrototype
    )
    eventTargetAgnosticAddListener(emitter, event, eventHandler)
    if (event !== "error" && typeof emitter.on === "function") {
        emitter.on("error", errorHandler)
    }
    if (signal) {
        eventTargetAgnosticAddListener(signal, "abort", abortListener, {
            once: true,
        })
    }
    return iterator
    function abortListener() {
        errorHandler(new AbortError())
    }
    function eventHandler(...args) {
        const promise = unconsumedPromises.shift()
        if (promise) {
            promise.resolve(createIterResult(args, false))
        } else {
            unconsumedEvents.push(args)
        }
    }
    function errorHandler(err) {
        finished = true
        const toError = unconsumedPromises.shift()
        if (toError) {
            toError.reject(err)
        } else {
            error = err
        }
        iterator.return()
    }
}
const { hasOwn } = Object
function get(obj, key) {
    if (hasOwn(obj, key)) {
        return obj[key]
    }
}
function getForce(obj, key) {
    const v = get(obj, key)
    assert(v != null)
    return v
}
function isNumber(x) {
    if (typeof x === "number") return true
    if (/^0x[0-9a-f]+$/i.test(String(x))) return true
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(String(x))
}
function hasKey(obj, keys) {
    let o = obj
    keys.slice(0, -1).forEach((key) => {
        o = get(o, key) ?? {}
    })
    const key = keys[keys.length - 1]
    return hasOwn(o, key)
}
function parse(args, { "--": doubleDash = false, alias = {}, boolean: __boolean = false, default: defaults = {}, stopEarly = false, string = [], collect = [], negatable = [], unknown = (i) => i } = {}) {
    const aliases = {}
    const flags = {
        bools: {},
        strings: {},
        unknownFn: unknown,
        allBools: false,
        collect: {},
        negatable: {},
    }
    if (alias !== undefined) {
        for (const key in alias) {
            const val = getForce(alias, key)
            if (typeof val === "string") {
                aliases[key] = [val]
            } else {
                aliases[key] = val
            }
            for (const alias of getForce(aliases, key)) {
                aliases[alias] = [key].concat(aliases[key].filter((y) => alias !== y))
            }
        }
    }
    if (__boolean !== undefined) {
        if (typeof __boolean === "boolean") {
            flags.allBools = !!__boolean
        } else {
            const booleanArgs = typeof __boolean === "string" ? [__boolean] : __boolean
            for (const key of booleanArgs.filter(Boolean)) {
                flags.bools[key] = true
                const alias = get(aliases, key)
                if (alias) {
                    for (const al of alias) {
                        flags.bools[al] = true
                    }
                }
            }
        }
    }
    if (string !== undefined) {
        const stringArgs = typeof string === "string" ? [string] : string
        for (const key of stringArgs.filter(Boolean)) {
            flags.strings[key] = true
            const alias = get(aliases, key)
            if (alias) {
                for (const al of alias) {
                    flags.strings[al] = true
                }
            }
        }
    }
    if (collect !== undefined) {
        const collectArgs = typeof collect === "string" ? [collect] : collect
        for (const key of collectArgs.filter(Boolean)) {
            flags.collect[key] = true
            const alias = get(aliases, key)
            if (alias) {
                for (const al of alias) {
                    flags.collect[al] = true
                }
            }
        }
    }
    if (negatable !== undefined) {
        const negatableArgs = typeof negatable === "string" ? [negatable] : negatable
        for (const key of negatableArgs.filter(Boolean)) {
            flags.negatable[key] = true
            const alias = get(aliases, key)
            if (alias) {
                for (const al of alias) {
                    flags.negatable[al] = true
                }
            }
        }
    }
    const argv = {
        _: [],
    }
    function argDefined(key, arg) {
        return (flags.allBools && /^--[^=]+$/.test(arg)) || get(flags.bools, key) || !!get(flags.strings, key) || !!get(aliases, key)
    }
    function setKey(obj, name, value, collect = true) {
        let o = obj
        const keys = name.split(".")
        keys.slice(0, -1).forEach(function (key) {
            if (get(o, key) === undefined) {
                o[key] = {}
            }
            o = get(o, key)
        })
        const key = keys[keys.length - 1]
        const collectable = collect && !!get(flags.collect, name)
        if (!collectable) {
            o[key] = value
        } else if (get(o, key) === undefined) {
            o[key] = [value]
        } else if (Array.isArray(get(o, key))) {
            o[key].push(value)
        } else {
            o[key] = [get(o, key), value]
        }
    }
    function setArg(key, val, arg = undefined, collect) {
        if (arg && flags.unknownFn && !argDefined(key, arg)) {
            if (flags.unknownFn(arg, key, val) === false) return
        }
        const value = !get(flags.strings, key) && isNumber(val) ? Number(val) : val
        setKey(argv, key, value, collect)
        const alias = get(aliases, key)
        if (alias) {
            for (const x of alias) {
                setKey(argv, x, value, collect)
            }
        }
    }
    function aliasIsBoolean(key) {
        return getForce(aliases, key).some((x) => typeof get(flags.bools, x) === "boolean")
    }
    let notFlags = []
    if (args.includes("--")) {
        notFlags = args.slice(args.indexOf("--") + 1)
        args = args.slice(0, args.indexOf("--"))
    }
    for (let i = 0; i < args.length; i++) {
        const arg = args[i]
        if (/^--.+=/.test(arg)) {
            const m = arg.match(/^--([^=]+)=(.*)$/s)
            assert(m != null)
            const [, key, value] = m
            if (flags.bools[key]) {
                const booleanValue = value !== "false"
                setArg(key, booleanValue, arg)
            } else {
                setArg(key, value, arg)
            }
        } else if (/^--no-.+/.test(arg) && get(flags.negatable, arg.replace(/^--no-/, ""))) {
            const m = arg.match(/^--no-(.+)/)
            assert(m != null)
            setArg(m[1], false, arg, false)
        } else if (/^--.+/.test(arg)) {
            const m = arg.match(/^--(.+)/)
            assert(m != null)
            const [, key] = m
            const next = args[i + 1]
            if (next !== undefined && !/^-/.test(next) && !get(flags.bools, key) && !flags.allBools && (get(aliases, key) ? !aliasIsBoolean(key) : true)) {
                setArg(key, next, arg)
                i++
            } else if (/^(true|false)$/.test(next)) {
                setArg(key, next === "true", arg)
                i++
            } else {
                setArg(key, get(flags.strings, key) ? "" : true, arg)
            }
        } else if (/^-[^-]+/.test(arg)) {
            const letters = arg.slice(1, -1).split("")
            let broken = false
            for (let j = 0; j < letters.length; j++) {
                const next = arg.slice(j + 2)
                if (next === "-") {
                    setArg(letters[j], next, arg)
                    continue
                }
                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
                    setArg(letters[j], next.split(/=(.+)/)[1], arg)
                    broken = true
                    break
                }
                if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
                    setArg(letters[j], next, arg)
                    broken = true
                    break
                }
                if (letters[j + 1] && letters[j + 1].match(/\W/)) {
                    setArg(letters[j], arg.slice(j + 2), arg)
                    broken = true
                    break
                } else {
                    setArg(letters[j], get(flags.strings, letters[j]) ? "" : true, arg)
                }
            }
            const [key] = arg.slice(-1)
            if (!broken && key !== "-") {
                if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !get(flags.bools, key) && (get(aliases, key) ? !aliasIsBoolean(key) : true)) {
                    setArg(key, args[i + 1], arg)
                    i++
                } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
                    setArg(key, args[i + 1] === "true", arg)
                    i++
                } else {
                    setArg(key, get(flags.strings, key) ? "" : true, arg)
                }
            }
        } else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
                argv._.push(flags.strings["_"] ?? !isNumber(arg) ? arg : Number(arg))
            }
            if (stopEarly) {
                argv._.push(...args.slice(i + 1))
                break
            }
        }
    }
    for (const [key, value] of Object.entries(defaults)) {
        if (!hasKey(argv, key.split("."))) {
            setKey(argv, key, value)
            if (aliases[key]) {
                for (const x of aliases[key]) {
                    setKey(argv, x, value)
                }
            }
        }
    }
    for (const key of Object.keys(flags.bools)) {
        if (!hasKey(argv, key.split("."))) {
            const value = get(flags.collect, key) ? [] : false
            setKey(argv, key, value, false)
        }
    }
    for (const key of Object.keys(flags.strings)) {
        if (!hasKey(argv, key.split(".")) && get(flags.collect, key)) {
            setKey(argv, key, [], false)
        }
    }
    if (doubleDash) {
        argv["--"] = []
        for (const key of notFlags) {
            argv["--"].push(key)
        }
    } else {
        for (const key of notFlags) {
            argv._.push(key)
        }
    }
    return argv
}
function getOptions() {
    const { Deno: Deno1 } = globalThis
    const args = parse(Deno1?.args ?? [])
    const options = new Map(
        Object.entries(args).map(([key, value]) => [
            key,
            {
                value,
            },
        ])
    )
    return {
        options,
    }
}
let optionsMap
function getOptionsFromBinding() {
    if (!optionsMap) {
        ;({ options: optionsMap } = getOptions())
    }
    return optionsMap
}
function getOptionValue(optionName) {
    const options = getOptionsFromBinding()
    if (optionName.startsWith("--no-")) {
        const option = options.get("--" + optionName.slice(5))
        return option && !option.value
    }
    return options.get(optionName)?.value
}
const CHAR_FORWARD_SLASH = 47
function assertPath(path) {
    if (typeof path !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path)}`)
    }
}
function isPosixPathSeparator(code) {
    return code === 47
}
function isPathSeparator(code) {
    return isPosixPathSeparator(code) || code === 92
}
function isWindowsDeviceRoot(code) {
    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
    let res = ""
    let lastSegmentLength = 0
    let lastSlash = -1
    let dots = 0
    let code
    for (let i = 0, len = path.length; i <= len; ++i) {
        if (i < len) code = path.charCodeAt(i)
        else if (isPathSeparator(code)) break
        else code = CHAR_FORWARD_SLASH
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) {
            } else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator)
                        if (lastSlashIndex === -1) {
                            res = ""
                            lastSegmentLength = 0
                        } else {
                            res = res.slice(0, lastSlashIndex)
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator)
                        }
                        lastSlash = i
                        dots = 0
                        continue
                    } else if (res.length === 2 || res.length === 1) {
                        res = ""
                        lastSegmentLength = 0
                        lastSlash = i
                        dots = 0
                        continue
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += `${separator}..`
                    else res = ".."
                    lastSegmentLength = 2
                }
            } else {
                if (res.length > 0) res += separator + path.slice(lastSlash + 1, i)
                else res = path.slice(lastSlash + 1, i)
                lastSegmentLength = i - lastSlash - 1
            }
            lastSlash = i
            dots = 0
        } else if (code === 46 && dots !== -1) {
            ++dots
        } else {
            dots = -1
        }
    }
    return res
}
function _format(sep, pathObject) {
    const dir = pathObject.dir || pathObject.root
    const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "")
    if (!dir) return base
    if (base === sep) return dir
    if (dir === pathObject.root) return dir + base
    return dir + sep + base
}
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20",
}
function encodeWhitespace(string) {
    return string.replaceAll(/[\s]/g, (c) => {
        return WHITESPACE_ENCODINGS[c] ?? c
    })
}
function lastPathSegment(path, isSep, start = 0) {
    let matchedNonSeparator = false
    let end = path.length
    for (let i = path.length - 1; i >= start; --i) {
        if (isSep(path.charCodeAt(i))) {
            if (matchedNonSeparator) {
                start = i + 1
                break
            }
        } else if (!matchedNonSeparator) {
            matchedNonSeparator = true
            end = i + 1
        }
    }
    return path.slice(start, end)
}
function stripTrailingSeparators(segment, isSep) {
    if (segment.length <= 1) {
        return segment
    }
    let end = segment.length
    for (let i = segment.length - 1; i > 0; i--) {
        if (isSep(segment.charCodeAt(i))) {
            end = i
        } else {
            break
        }
    }
    return segment.slice(0, end)
}
function stripSuffix(name, suffix) {
    if (suffix.length >= name.length) {
        return name
    }
    const lenDiff = name.length - suffix.length
    for (let i = suffix.length - 1; i >= 0; --i) {
        if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
            return name
        }
    }
    return name.slice(0, -suffix.length)
}
const sep = "\\"
const delimiter = ";"
function resolve(...pathSegments) {
    let resolvedDevice = ""
    let resolvedTail = ""
    let resolvedAbsolute = false
    for (let i = pathSegments.length - 1; i >= -1; i--) {
        let path
        const { Deno: Deno1 } = globalThis
        if (i >= 0) {
            path = pathSegments[i]
        } else if (!resolvedDevice) {
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.")
            }
            path = Deno1.cwd()
        } else {
            if (typeof Deno1?.env?.get !== "function" || typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.")
            }
            path = Deno1.cwd()
            if (path === undefined || path.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
                path = `${resolvedDevice}\\`
            }
        }
        assertPath(path)
        const len = path.length
        if (len === 0) continue
        let rootEnd = 0
        let device = ""
        let isAbsolute = false
        const code = path.charCodeAt(0)
        if (len > 1) {
            if (isPathSeparator(code)) {
                isAbsolute = true
                if (isPathSeparator(path.charCodeAt(1))) {
                    let j = 2
                    let last = j
                    for (; j < len; ++j) {
                        if (isPathSeparator(path.charCodeAt(j))) break
                    }
                    if (j < len && j !== last) {
                        const firstPart = path.slice(last, j)
                        last = j
                        for (; j < len; ++j) {
                            if (!isPathSeparator(path.charCodeAt(j))) break
                        }
                        if (j < len && j !== last) {
                            last = j
                            for (; j < len; ++j) {
                                if (isPathSeparator(path.charCodeAt(j))) break
                            }
                            if (j === len) {
                                device = `\\\\${firstPart}\\${path.slice(last)}`
                                rootEnd = j
                            } else if (j !== last) {
                                device = `\\\\${firstPart}\\${path.slice(last, j)}`
                                rootEnd = j
                            }
                        }
                    }
                } else {
                    rootEnd = 1
                }
            } else if (isWindowsDeviceRoot(code)) {
                if (path.charCodeAt(1) === 58) {
                    device = path.slice(0, 2)
                    rootEnd = 2
                    if (len > 2) {
                        if (isPathSeparator(path.charCodeAt(2))) {
                            isAbsolute = true
                            rootEnd = 3
                        }
                    }
                }
            }
        } else if (isPathSeparator(code)) {
            rootEnd = 1
            isAbsolute = true
        }
        if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            continue
        }
        if (resolvedDevice.length === 0 && device.length > 0) {
            resolvedDevice = device
        }
        if (!resolvedAbsolute) {
            resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`
            resolvedAbsolute = isAbsolute
        }
        if (resolvedAbsolute && resolvedDevice.length > 0) break
    }
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator)
    return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || "."
}
function normalize(path) {
    assertPath(path)
    const len = path.length
    if (len === 0) return "."
    let rootEnd = 0
    let device
    let isAbsolute = false
    const code = path.charCodeAt(0)
    if (len > 1) {
        if (isPathSeparator(code)) {
            isAbsolute = true
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2
                let last = j
                for (; j < len; ++j) {
                    if (isPathSeparator(path.charCodeAt(j))) break
                }
                if (j < len && j !== last) {
                    const firstPart = path.slice(last, j)
                    last = j
                    for (; j < len; ++j) {
                        if (!isPathSeparator(path.charCodeAt(j))) break
                    }
                    if (j < len && j !== last) {
                        last = j
                        for (; j < len; ++j) {
                            if (isPathSeparator(path.charCodeAt(j))) break
                        }
                        if (j === len) {
                            return `\\\\${firstPart}\\${path.slice(last)}\\`
                        } else if (j !== last) {
                            device = `\\\\${firstPart}\\${path.slice(last, j)}`
                            rootEnd = j
                        }
                    }
                }
            } else {
                rootEnd = 1
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                device = path.slice(0, 2)
                rootEnd = 2
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) {
                        isAbsolute = true
                        rootEnd = 3
                    }
                }
            }
        }
    } else if (isPathSeparator(code)) {
        return "\\"
    }
    let tail
    if (rootEnd < len) {
        tail = normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator)
    } else {
        tail = ""
    }
    if (tail.length === 0 && !isAbsolute) tail = "."
    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
        tail += "\\"
    }
    if (device === undefined) {
        if (isAbsolute) {
            if (tail.length > 0) return `\\${tail}`
            else return "\\"
        } else if (tail.length > 0) {
            return tail
        } else {
            return ""
        }
    } else if (isAbsolute) {
        if (tail.length > 0) return `${device}\\${tail}`
        else return `${device}\\`
    } else if (tail.length > 0) {
        return device + tail
    } else {
        return device
    }
}
function isAbsolute(path) {
    assertPath(path)
    const len = path.length
    if (len === 0) return false
    const code = path.charCodeAt(0)
    if (isPathSeparator(code)) {
        return true
    } else if (isWindowsDeviceRoot(code)) {
        if (len > 2 && path.charCodeAt(1) === 58) {
            if (isPathSeparator(path.charCodeAt(2))) return true
        }
    }
    return false
}
function join1(...paths) {
    const pathsCount = paths.length
    if (pathsCount === 0) return "."
    let joined
    let firstPart = null
    for (let i = 0; i < pathsCount; ++i) {
        const path = paths[i]
        assertPath(path)
        if (path.length > 0) {
            if (joined === undefined) joined = firstPart = path
            else joined += `\\${path}`
        }
    }
    if (joined === undefined) return "."
    let needsReplace = true
    let slashCount = 0
    assert(firstPart != null)
    if (isPathSeparator(firstPart.charCodeAt(0))) {
        ++slashCount
        const firstLen = firstPart.length
        if (firstLen > 1) {
            if (isPathSeparator(firstPart.charCodeAt(1))) {
                ++slashCount
                if (firstLen > 2) {
                    if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount
                    else {
                        needsReplace = false
                    }
                }
            }
        }
    }
    if (needsReplace) {
        for (; slashCount < joined.length; ++slashCount) {
            if (!isPathSeparator(joined.charCodeAt(slashCount))) break
        }
        if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`
    }
    return normalize(joined)
}
function relative(from, to) {
    assertPath(from)
    assertPath(to)
    if (from === to) return ""
    const fromOrig = resolve(from)
    const toOrig = resolve(to)
    if (fromOrig === toOrig) return ""
    from = fromOrig.toLowerCase()
    to = toOrig.toLowerCase()
    if (from === to) return ""
    let fromStart = 0
    let fromEnd = from.length
    for (; fromStart < fromEnd; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 92) break
    }
    for (; fromEnd - 1 > fromStart; --fromEnd) {
        if (from.charCodeAt(fromEnd - 1) !== 92) break
    }
    const fromLen = fromEnd - fromStart
    let toStart = 0
    let toEnd = to.length
    for (; toStart < toEnd; ++toStart) {
        if (to.charCodeAt(toStart) !== 92) break
    }
    for (; toEnd - 1 > toStart; --toEnd) {
        if (to.charCodeAt(toEnd - 1) !== 92) break
    }
    const toLen = toEnd - toStart
    const length = fromLen < toLen ? fromLen : toLen
    let lastCommonSep = -1
    let i = 0
    for (; i <= length; ++i) {
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === 92) {
                    return toOrig.slice(toStart + i + 1)
                } else if (i === 2) {
                    return toOrig.slice(toStart + i)
                }
            }
            if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === 92) {
                    lastCommonSep = i
                } else if (i === 2) {
                    lastCommonSep = 3
                }
            }
            break
        }
        const fromCode = from.charCodeAt(fromStart + i)
        const toCode = to.charCodeAt(toStart + i)
        if (fromCode !== toCode) break
        else if (fromCode === 92) lastCommonSep = i
    }
    if (i !== length && lastCommonSep === -1) {
        return toOrig
    }
    let out = ""
    if (lastCommonSep === -1) lastCommonSep = 0
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === 92) {
            if (out.length === 0) out += ".."
            else out += "\\.."
        }
    }
    if (out.length > 0) {
        return out + toOrig.slice(toStart + lastCommonSep, toEnd)
    } else {
        toStart += lastCommonSep
        if (toOrig.charCodeAt(toStart) === 92) ++toStart
        return toOrig.slice(toStart, toEnd)
    }
}
function toNamespacedPath(path) {
    if (typeof path !== "string") return path
    if (path.length === 0) return ""
    const resolvedPath = resolve(path)
    if (resolvedPath.length >= 3) {
        if (resolvedPath.charCodeAt(0) === 92) {
            if (resolvedPath.charCodeAt(1) === 92) {
                const code = resolvedPath.charCodeAt(2)
                if (code !== 63 && code !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath.slice(2)}`
                }
            }
        } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
            if (resolvedPath.charCodeAt(1) === 58 && resolvedPath.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath}`
            }
        }
    }
    return path
}
function dirname(path) {
    assertPath(path)
    const len = path.length
    if (len === 0) return "."
    let rootEnd = -1
    let end = -1
    let matchedSlash = true
    let offset = 0
    const code = path.charCodeAt(0)
    if (len > 1) {
        if (isPathSeparator(code)) {
            rootEnd = offset = 1
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2
                let last = j
                for (; j < len; ++j) {
                    if (isPathSeparator(path.charCodeAt(j))) break
                }
                if (j < len && j !== last) {
                    last = j
                    for (; j < len; ++j) {
                        if (!isPathSeparator(path.charCodeAt(j))) break
                    }
                    if (j < len && j !== last) {
                        last = j
                        for (; j < len; ++j) {
                            if (isPathSeparator(path.charCodeAt(j))) break
                        }
                        if (j === len) {
                            return path
                        }
                        if (j !== last) {
                            rootEnd = offset = j + 1
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = offset = 2
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) rootEnd = offset = 3
                }
            }
        }
    } else if (isPathSeparator(code)) {
        return path
    }
    for (let i = len - 1; i >= offset; --i) {
        if (isPathSeparator(path.charCodeAt(i))) {
            if (!matchedSlash) {
                end = i
                break
            }
        } else {
            matchedSlash = false
        }
    }
    if (end === -1) {
        if (rootEnd === -1) return "."
        else end = rootEnd
    }
    return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator)
}
function basename(path, suffix = "") {
    assertPath(path)
    if (path.length === 0) return path
    if (typeof suffix !== "string") {
        throw new TypeError(`Suffix must be a string. Received ${JSON.stringify(suffix)}`)
    }
    let start = 0
    if (path.length >= 2) {
        const drive = path.charCodeAt(0)
        if (isWindowsDeviceRoot(drive)) {
            if (path.charCodeAt(1) === 58) start = 2
        }
    }
    const lastSegment = lastPathSegment(path, isPathSeparator, start)
    const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator)
    return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment
}
function extname(path) {
    assertPath(path)
    let start = 0
    let startDot = -1
    let startPart = 0
    let end = -1
    let matchedSlash = true
    let preDotState = 0
    if (path.length >= 2 && path.charCodeAt(1) === 58 && isWindowsDeviceRoot(path.charCodeAt(0))) {
        start = startPart = 2
    }
    for (let i = path.length - 1; i >= start; --i) {
        const code = path.charCodeAt(i)
        if (isPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1
                break
            }
            continue
        }
        if (end === -1) {
            matchedSlash = false
            end = i + 1
        }
        if (code === 46) {
            if (startDot === -1) startDot = i
            else if (preDotState !== 1) preDotState = 1
        } else if (startDot !== -1) {
            preDotState = -1
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
        return ""
    }
    return path.slice(startDot, end)
}
function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`)
    }
    return _format("\\", pathObject)
}
function parse1(path) {
    assertPath(path)
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: "",
    }
    const len = path.length
    if (len === 0) return ret
    let rootEnd = 0
    let code = path.charCodeAt(0)
    if (len > 1) {
        if (isPathSeparator(code)) {
            rootEnd = 1
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2
                let last = j
                for (; j < len; ++j) {
                    if (isPathSeparator(path.charCodeAt(j))) break
                }
                if (j < len && j !== last) {
                    last = j
                    for (; j < len; ++j) {
                        if (!isPathSeparator(path.charCodeAt(j))) break
                    }
                    if (j < len && j !== last) {
                        last = j
                        for (; j < len; ++j) {
                            if (isPathSeparator(path.charCodeAt(j))) break
                        }
                        if (j === len) {
                            rootEnd = j
                        } else if (j !== last) {
                            rootEnd = j + 1
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = 2
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) {
                        if (len === 3) {
                            ret.root = ret.dir = path
                            ret.base = "\\"
                            return ret
                        }
                        rootEnd = 3
                    }
                } else {
                    ret.root = ret.dir = path
                    return ret
                }
            }
        }
    } else if (isPathSeparator(code)) {
        ret.root = ret.dir = path
        ret.base = "\\"
        return ret
    }
    if (rootEnd > 0) ret.root = path.slice(0, rootEnd)
    let startDot = -1
    let startPart = rootEnd
    let end = -1
    let matchedSlash = true
    let i = path.length - 1
    let preDotState = 0
    for (; i >= rootEnd; --i) {
        code = path.charCodeAt(i)
        if (isPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1
                break
            }
            continue
        }
        if (end === -1) {
            matchedSlash = false
            end = i + 1
        }
        if (code === 46) {
            if (startDot === -1) startDot = i
            else if (preDotState !== 1) preDotState = 1
        } else if (startDot !== -1) {
            preDotState = -1
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
        if (end !== -1) {
            ret.base = ret.name = path.slice(startPart, end)
        }
    } else {
        ret.name = path.slice(startPart, startDot)
        ret.base = path.slice(startPart, end)
        ret.ext = path.slice(startDot, end)
    }
    ret.base = ret.base || "\\"
    if (startPart > 0 && startPart !== rootEnd) {
        ret.dir = path.slice(0, startPart - 1)
    } else ret.dir = ret.root
    return ret
}
function fromFileUrl(url) {
    url = url instanceof URL ? url : new URL(url)
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.")
    }
    let path = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\")
    if (url.hostname != "") {
        path = `\\\\${url.hostname}${path}`
    }
    return path
}
function toFileUrl(path) {
    if (!isAbsolute(path)) {
        throw new TypeError("Must be an absolute path.")
    }
    const [, hostname, pathname] = path.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/)
    const url = new URL("file:///")
    url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"))
    if (hostname != null && hostname != "localhost") {
        url.hostname = hostname
        if (!url.hostname) {
            throw new TypeError("Invalid hostname.")
        }
    }
    return url
}
const mod4 = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join1,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse1,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl,
}
const sep1 = "/"
const delimiter1 = ":"
function resolve1(...pathSegments) {
    let resolvedPath = ""
    let resolvedAbsolute = false
    for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        let path
        if (i >= 0) path = pathSegments[i]
        else {
            const { Deno: Deno1 } = globalThis
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.")
            }
            path = Deno1.cwd()
        }
        assertPath(path)
        if (path.length === 0) {
            continue
        }
        resolvedPath = `${path}/${resolvedPath}`
        resolvedAbsolute = isPosixPathSeparator(path.charCodeAt(0))
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator)
    if (resolvedAbsolute) {
        if (resolvedPath.length > 0) return `/${resolvedPath}`
        else return "/"
    } else if (resolvedPath.length > 0) return resolvedPath
    else return "."
}
function normalize1(path) {
    assertPath(path)
    if (path.length === 0) return "."
    const isAbsolute = isPosixPathSeparator(path.charCodeAt(0))
    const trailingSeparator = isPosixPathSeparator(path.charCodeAt(path.length - 1))
    path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator)
    if (path.length === 0 && !isAbsolute) path = "."
    if (path.length > 0 && trailingSeparator) path += "/"
    if (isAbsolute) return `/${path}`
    return path
}
function isAbsolute1(path) {
    assertPath(path)
    return path.length > 0 && isPosixPathSeparator(path.charCodeAt(0))
}
function join2(...paths) {
    if (paths.length === 0) return "."
    let joined
    for (let i = 0, len = paths.length; i < len; ++i) {
        const path = paths[i]
        assertPath(path)
        if (path.length > 0) {
            if (!joined) joined = path
            else joined += `/${path}`
        }
    }
    if (!joined) return "."
    return normalize1(joined)
}
function relative1(from, to) {
    assertPath(from)
    assertPath(to)
    if (from === to) return ""
    from = resolve1(from)
    to = resolve1(to)
    if (from === to) return ""
    let fromStart = 1
    const fromEnd = from.length
    for (; fromStart < fromEnd; ++fromStart) {
        if (!isPosixPathSeparator(from.charCodeAt(fromStart))) break
    }
    const fromLen = fromEnd - fromStart
    let toStart = 1
    const toEnd = to.length
    for (; toStart < toEnd; ++toStart) {
        if (!isPosixPathSeparator(to.charCodeAt(toStart))) break
    }
    const toLen = toEnd - toStart
    const length = fromLen < toLen ? fromLen : toLen
    let lastCommonSep = -1
    let i = 0
    for (; i <= length; ++i) {
        if (i === length) {
            if (toLen > length) {
                if (isPosixPathSeparator(to.charCodeAt(toStart + i))) {
                    return to.slice(toStart + i + 1)
                } else if (i === 0) {
                    return to.slice(toStart + i)
                }
            } else if (fromLen > length) {
                if (isPosixPathSeparator(from.charCodeAt(fromStart + i))) {
                    lastCommonSep = i
                } else if (i === 0) {
                    lastCommonSep = 0
                }
            }
            break
        }
        const fromCode = from.charCodeAt(fromStart + i)
        const toCode = to.charCodeAt(toStart + i)
        if (fromCode !== toCode) break
        else if (isPosixPathSeparator(fromCode)) lastCommonSep = i
    }
    let out = ""
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || isPosixPathSeparator(from.charCodeAt(i))) {
            if (out.length === 0) out += ".."
            else out += "/.."
        }
    }
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep)
    else {
        toStart += lastCommonSep
        if (isPosixPathSeparator(to.charCodeAt(toStart))) ++toStart
        return to.slice(toStart)
    }
}
function toNamespacedPath1(path) {
    return path
}
function dirname1(path) {
    if (path.length === 0) return "."
    let end = -1
    let matchedNonSeparator = false
    for (let i = path.length - 1; i >= 1; --i) {
        if (isPosixPathSeparator(path.charCodeAt(i))) {
            if (matchedNonSeparator) {
                end = i
                break
            }
        } else {
            matchedNonSeparator = true
        }
    }
    if (end === -1) {
        return isPosixPathSeparator(path.charCodeAt(0)) ? "/" : "."
    }
    return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator)
}
function basename1(path, suffix = "") {
    assertPath(path)
    if (path.length === 0) return path
    if (typeof suffix !== "string") {
        throw new TypeError(`Suffix must be a string. Received ${JSON.stringify(suffix)}`)
    }
    const lastSegment = lastPathSegment(path, isPosixPathSeparator)
    const strippedSegment = stripTrailingSeparators(lastSegment, isPosixPathSeparator)
    return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment
}
function extname1(path) {
    assertPath(path)
    let startDot = -1
    let startPart = 0
    let end = -1
    let matchedSlash = true
    let preDotState = 0
    for (let i = path.length - 1; i >= 0; --i) {
        const code = path.charCodeAt(i)
        if (isPosixPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1
                break
            }
            continue
        }
        if (end === -1) {
            matchedSlash = false
            end = i + 1
        }
        if (code === 46) {
            if (startDot === -1) startDot = i
            else if (preDotState !== 1) preDotState = 1
        } else if (startDot !== -1) {
            preDotState = -1
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
        return ""
    }
    return path.slice(startDot, end)
}
function format1(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`)
    }
    return _format("/", pathObject)
}
function parse2(path) {
    assertPath(path)
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: "",
    }
    if (path.length === 0) return ret
    const isAbsolute = isPosixPathSeparator(path.charCodeAt(0))
    let start
    if (isAbsolute) {
        ret.root = "/"
        start = 1
    } else {
        start = 0
    }
    let startDot = -1
    let startPart = 0
    let end = -1
    let matchedSlash = true
    let i = path.length - 1
    let preDotState = 0
    for (; i >= start; --i) {
        const code = path.charCodeAt(i)
        if (isPosixPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1
                break
            }
            continue
        }
        if (end === -1) {
            matchedSlash = false
            end = i + 1
        }
        if (code === 46) {
            if (startDot === -1) startDot = i
            else if (preDotState !== 1) preDotState = 1
        } else if (startDot !== -1) {
            preDotState = -1
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
        if (end !== -1) {
            if (startPart === 0 && isAbsolute) {
                ret.base = ret.name = path.slice(1, end)
            } else {
                ret.base = ret.name = path.slice(startPart, end)
            }
        }
        ret.base = ret.base || "/"
    } else {
        if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot)
            ret.base = path.slice(1, end)
        } else {
            ret.name = path.slice(startPart, startDot)
            ret.base = path.slice(startPart, end)
        }
        ret.ext = path.slice(startDot, end)
    }
    if (startPart > 0) {
        ret.dir = stripTrailingSeparators(path.slice(0, startPart - 1), isPosixPathSeparator)
    } else if (isAbsolute) ret.dir = "/"
    return ret
}
function fromFileUrl1(url) {
    url = url instanceof URL ? url : new URL(url)
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.")
    }
    return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"))
}
function toFileUrl1(path) {
    if (!isAbsolute1(path)) {
        throw new TypeError("Must be an absolute path.")
    }
    const url = new URL("file:///")
    url.pathname = encodeWhitespace(path.replace(/%/g, "%25").replace(/\\/g, "%5C"))
    return url
}
const mod5 = {
    sep: sep1,
    delimiter: delimiter1,
    resolve: resolve1,
    normalize: normalize1,
    isAbsolute: isAbsolute1,
    join: join2,
    relative: relative1,
    toNamespacedPath: toNamespacedPath1,
    dirname: dirname1,
    basename: basename1,
    extname: extname1,
    format: format1,
    parse: parse2,
    fromFileUrl: fromFileUrl1,
    toFileUrl: toFileUrl1,
}
const path = isWindows ? mod4 : mod5
const { join: join3, normalize: normalize2 } = path
const path1 = isWindows ? mod4 : mod5
const { basename: basename2, delimiter: delimiter2, dirname: dirname2, extname: extname2, format: format2, fromFileUrl: fromFileUrl2, isAbsolute: isAbsolute2, join: join4, normalize: normalize3, parse: parse3, relative: relative2, resolve: resolve2, sep: sep2, toFileUrl: toFileUrl2, toNamespacedPath: toNamespacedPath2 } = path1
let _exiting = false
const kSize = 2048
const kMask = 2048 - 1
class FixedCircularBuffer {
    bottom
    top
    list
    next
    constructor() {
        this.bottom = 0
        this.top = 0
        this.list = new Array(kSize)
        this.next = null
    }
    isEmpty() {
        return this.top === this.bottom
    }
    isFull() {
        return ((this.top + 1) & kMask) === this.bottom
    }
    push(data) {
        this.list[this.top] = data
        this.top = (this.top + 1) & kMask
    }
    shift() {
        const nextItem = this.list[this.bottom]
        if (nextItem === undefined) {
            return null
        }
        this.list[this.bottom] = undefined
        this.bottom = (this.bottom + 1) & kMask
        return nextItem
    }
}
class FixedQueue {
    head
    tail
    constructor() {
        this.head = this.tail = new FixedCircularBuffer()
    }
    isEmpty() {
        return this.head.isEmpty()
    }
    push(data) {
        if (this.head.isFull()) {
            this.head = this.head.next = new FixedCircularBuffer()
        }
        this.head.push(data)
    }
    shift() {
        const tail = this.tail
        const next = tail.shift()
        if (tail.isEmpty() && tail.next !== null) {
            this.tail = tail.next
        }
        return next
    }
}
const queue = new FixedQueue()
let _nextTick
function processTicksAndRejections() {
    let tock
    do {
        while ((tock = queue.shift())) {
            try {
                const callback = tock.callback
                if (tock.args === undefined) {
                    callback()
                } else {
                    const args = tock.args
                    switch (args.length) {
                        case 1:
                            callback(args[0])
                            break
                        case 2:
                            callback(args[0], args[1])
                            break
                        case 3:
                            callback(args[0], args[1], args[2])
                            break
                        case 4:
                            callback(args[0], args[1], args[2], args[3])
                            break
                        default:
                            callback(...args)
                    }
                }
            } finally {
            }
        }
        core.runMicrotasks()
    } while (!queue.isEmpty())
    core.setHasTickScheduled(false)
}
if (typeof core.setNextTickCallback !== "undefined") {
    function runNextTicks() {
        if (!core.hasTickScheduled()) {
            core.runMicrotasks()
        }
        if (!core.hasTickScheduled()) {
            return true
        }
        processTicksAndRejections()
        return true
    }
    core.setNextTickCallback(processTicksAndRejections)
    core.setMacrotaskCallback(runNextTicks)
    function __nextTickNative(callback, ...args) {
        validateFunction(callback, "callback")
        if (_exiting) {
            return
        }
        let args_
        switch (args.length) {
            case 0:
                break
            case 1:
                args_ = [args[0]]
                break
            case 2:
                args_ = [args[0], args[1]]
                break
            case 3:
                args_ = [args[0], args[1], args[2]]
                break
            default:
                args_ = new Array(args.length)
                for (let i = 0; i < args.length; i++) {
                    args_[i] = args[i]
                }
        }
        if (queue.isEmpty()) {
            core.setHasTickScheduled(true)
        }
        const tickObject = {
            callback,
            args: args_,
        }
        queue.push(tickObject)
    }
    _nextTick = __nextTickNative
} else {
    function __nextTickQueueMicrotask(callback, ...args) {
        if (args) {
            queueMicrotask(() => callback.call(this, ...args))
        } else {
            queueMicrotask(callback)
        }
    }
    _nextTick = __nextTickQueueMicrotask
}
function nextTick1(callback, ...args) {
    _nextTick(callback, ...args)
}
function _arch() {
    if (Deno.build.arch == "x86_64") {
        return "x64"
    } else if (Deno.build.arch == "aarch64") {
        return "arm64"
    } else {
        throw Error("unreachable")
    }
}
const arch = _arch()
const chdir = Deno.chdir
const cwd = Deno.cwd
function denoEnvGet(name) {
    try {
        return Deno.env.get(name)
    } catch (e) {
        if (e instanceof TypeError) {
            return undefined
        }
        throw e
    }
}
const OBJECT_PROTO_PROP_NAMES = Object.getOwnPropertyNames(Object.prototype)
const env = new Proxy(Object(), {
    get: (target, prop) => {
        if (typeof prop === "symbol") {
            return target[prop]
        }
        const envValue = denoEnvGet(prop)
        if (envValue) {
            return envValue
        }
        if (OBJECT_PROTO_PROP_NAMES.includes(prop)) {
            return target[prop]
        }
        return envValue
    },
    ownKeys: () => Reflect.ownKeys(Deno.env.toObject()),
    getOwnPropertyDescriptor: (_target, name) => {
        const value = denoEnvGet(String(name))
        if (value) {
            return {
                enumerable: true,
                configurable: true,
                value,
            }
        }
    },
    set(_target, prop, value) {
        Deno.env.set(String(prop), String(value))
        return true
    },
    has: (_target, prop) => typeof denoEnvGet(String(prop)) === "string",
})
const pid = Deno.pid
const platform = isWindows ? "win32" : Deno.build.os
const version = "v18.12.1"
const versions = {
    node: "18.12.1",
    uv: "1.43.0",
    zlib: "1.2.11",
    brotli: "1.0.9",
    ares: "1.18.1",
    modules: "108",
    nghttp2: "1.47.0",
    napi: "8",
    llhttp: "6.0.10",
    openssl: "3.0.7+quic",
    cldr: "41.0",
    icu: "71.1",
    tz: "2022b",
    unicode: "14.0",
    ngtcp2: "0.8.1",
    nghttp3: "0.7.0",
    ...Deno.version,
}
var Encodings
;(function (Encodings) {
    Encodings[(Encodings["ASCII"] = 0)] = "ASCII"
    Encodings[(Encodings["UTF8"] = 1)] = "UTF8"
    Encodings[(Encodings["BASE64"] = 2)] = "BASE64"
    Encodings[(Encodings["UCS2"] = 3)] = "UCS2"
    Encodings[(Encodings["BINARY"] = 4)] = "BINARY"
    Encodings[(Encodings["HEX"] = 5)] = "HEX"
    Encodings[(Encodings["BUFFER"] = 6)] = "BUFFER"
    Encodings[(Encodings["BASE64URL"] = 7)] = "BASE64URL"
    Encodings[(Encodings["LATIN1"] = 4)] = "LATIN1"
})(Encodings || (Encodings = {}))
const encodings = []
encodings[Encodings.ASCII] = "ascii"
encodings[Encodings.BASE64] = "base64"
encodings[Encodings.BASE64URL] = "base64url"
encodings[Encodings.BUFFER] = "buffer"
encodings[Encodings.HEX] = "hex"
encodings[Encodings.LATIN1] = "latin1"
encodings[Encodings.UCS2] = "utf16le"
encodings[Encodings.UTF8] = "utf8"
const __default1 = {
    encodings,
}
const mod6 = {
    encodings: encodings,
    default: __default1,
}
function indexOfNeedle(source, needle, start = 0) {
    if (start >= source.length) {
        return -1
    }
    if (start < 0) {
        start = Math.max(0, source.length + start)
    }
    const s = needle[0]
    for (let i = start; i < source.length; i++) {
        if (source[i] !== s) continue
        const pin = i
        let matched = 1
        let j = i
        while (matched < needle.length) {
            j++
            if (source[j] !== needle[j - pin]) {
                break
            }
            matched++
        }
        if (matched === needle.length) {
            return pin
        }
    }
    return -1
}
function numberToBytes(n) {
    if (n === 0) return new Uint8Array([0])
    const bytes = []
    bytes.unshift(n & 255)
    while (n >= 256) {
        n = n >>> 8
        bytes.unshift(n & 255)
    }
    return new Uint8Array(bytes)
}
function findLastIndex(targetBuffer, buffer, offset) {
    offset = offset > targetBuffer.length ? targetBuffer.length : offset
    const searchableBuffer = targetBuffer.slice(0, offset + buffer.length)
    const searchableBufferLastIndex = searchableBuffer.length - 1
    const bufferLastIndex = buffer.length - 1
    let lastMatchIndex = -1
    let matches = 0
    let index = -1
    for (let x = 0; x <= searchableBufferLastIndex; x++) {
        if (searchableBuffer[searchableBufferLastIndex - x] === buffer[bufferLastIndex - matches]) {
            if (lastMatchIndex === -1) {
                lastMatchIndex = x
            }
            matches++
        } else {
            matches = 0
            if (lastMatchIndex !== -1) {
                x = lastMatchIndex + 1
                lastMatchIndex = -1
            }
            continue
        }
        if (matches === buffer.length) {
            index = x
            break
        }
    }
    if (index === -1) return index
    return searchableBufferLastIndex - index
}
function indexOfBuffer(targetBuffer, buffer, byteOffset, encoding, forwardDirection) {
    if (!Encodings[encoding] === undefined) {
        throw new Error(`Unknown encoding code ${encoding}`)
    }
    if (!forwardDirection) {
        if (byteOffset < 0) {
            byteOffset = targetBuffer.length + byteOffset
        }
        if (buffer.length === 0) {
            return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length
        }
        return findLastIndex(targetBuffer, buffer, byteOffset)
    }
    if (buffer.length === 0) {
        return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length
    }
    return indexOfNeedle(targetBuffer, buffer, byteOffset)
}
function indexOfNumber(targetBuffer, number, byteOffset, forwardDirection) {
    const bytes = numberToBytes(number)
    if (bytes.length > 1) {
        throw new Error("Multi byte number search is not supported")
    }
    return indexOfBuffer(targetBuffer, numberToBytes(number), byteOffset, Encodings.UTF8, forwardDirection)
}
const __default2 = {
    indexOfBuffer,
    indexOfNumber,
}
const mod7 = {
    indexOfBuffer: indexOfBuffer,
    indexOfNumber: indexOfNumber,
    numberToBytes: numberToBytes,
    default: __default2,
}
const base64abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]
function encode(data) {
    const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data)
    let result = "",
        i
    const l = uint8.length
    for (i = 2; i < l; i += 3) {
        result += base64abc[uint8[i - 2] >> 2]
        result += base64abc[((uint8[i - 2] & 0x03) << 4) | (uint8[i - 1] >> 4)]
        result += base64abc[((uint8[i - 1] & 0x0f) << 2) | (uint8[i] >> 6)]
        result += base64abc[uint8[i] & 0x3f]
    }
    if (i === l + 1) {
        result += base64abc[uint8[i - 2] >> 2]
        result += base64abc[(uint8[i - 2] & 0x03) << 4]
        result += "=="
    }
    if (i === l) {
        result += base64abc[uint8[i - 2] >> 2]
        result += base64abc[((uint8[i - 2] & 0x03) << 4) | (uint8[i - 1] >> 4)]
        result += base64abc[(uint8[i - 1] & 0x0f) << 2]
        result += "="
    }
    return result
}
function decode(b64) {
    const binString = atob(b64)
    const size = binString.length
    const bytes = new Uint8Array(size)
    for (let i = 0; i < size; i++) {
        bytes[i] = binString.charCodeAt(i)
    }
    return bytes
}
function addPaddingToBase64url(base64url) {
    if (base64url.length % 4 === 2) return base64url + "=="
    if (base64url.length % 4 === 3) return base64url + "="
    if (base64url.length % 4 === 1) {
        throw new TypeError("Illegal base64url string!")
    }
    return base64url
}
function convertBase64urlToBase64(b64url) {
    if (!/^[-_A-Z0-9]*?={0,2}$/i.test(b64url)) {
        throw new TypeError("Failed to decode base64url: invalid character")
    }
    return addPaddingToBase64url(b64url).replace(/\-/g, "+").replace(/_/g, "/")
}
function convertBase64ToBase64url(b64) {
    return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}
function encode1(data) {
    return convertBase64ToBase64url(encode(data))
}
function decode1(b64url) {
    return decode(convertBase64urlToBase64(b64url))
}
function asciiToBytes(str) {
    const byteArray = []
    for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255)
    }
    return new Uint8Array(byteArray)
}
function base64ToBytes(str) {
    str = base64clean(str)
    str = str.replaceAll("-", "+").replaceAll("_", "/")
    return decode(str)
}
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
function base64clean(str) {
    str = str.split("=")[0]
    str = str.trim().replace(INVALID_BASE64_RE, "")
    if (str.length < 2) return ""
    while (str.length % 4 !== 0) {
        str = str + "="
    }
    return str
}
function base64UrlToBytes(str) {
    str = base64clean(str)
    str = str.replaceAll("+", "-").replaceAll("/", "_")
    return decode1(str)
}
function hexToBytes(str) {
    const byteArray = new Uint8Array(Math.floor((str || "").length / 2))
    let i
    for (i = 0; i < byteArray.length; i++) {
        const a = Number.parseInt(str[i * 2], 16)
        const b = Number.parseInt(str[i * 2 + 1], 16)
        if (Number.isNaN(a) && Number.isNaN(b)) {
            break
        }
        byteArray[i] = (a << 4) | b
    }
    return new Uint8Array(i === byteArray.length ? byteArray : byteArray.slice(0, i))
}
function utf16leToBytes(str, units) {
    let c, hi, lo
    const byteArray = []
    for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) {
            break
        }
        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
    }
    return new Uint8Array(byteArray)
}
function bytesToAscii(bytes) {
    let ret = ""
    for (let i = 0; i < bytes.length; ++i) {
        ret += String.fromCharCode(bytes[i] & 127)
    }
    return ret
}
function bytesToUtf16le(bytes) {
    let res = ""
    for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
    }
    return res
}
Array.isArray
Object.assign
Object.create
Object.hasOwn
RegExp.prototype.exec
String.fromCharCode
const { signals } = os
Symbol.for("nodejs.util.inspect.custom")
const kEnumerableProperty = Object.create(null)
kEnumerableProperty.enumerable = true
const kEmptyObject = Object.freeze(Object.create(null))
function once1(callback) {
    let called = false
    return function (...args) {
        if (called) return
        called = true
        Reflect.apply(callback, this, args)
    }
}
function createDeferredPromise() {
    let resolve
    let reject
    const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
    })
    return {
        promise,
        resolve,
        reject,
    }
}
const kCustomPromisifiedSymbol = Symbol.for("nodejs.util.promisify.custom")
const kCustomPromisifyArgsSymbol = Symbol.for("nodejs.util.promisify.customArgs")
function promisify(original) {
    validateFunction(original, "original")
    if (original[kCustomPromisifiedSymbol]) {
        const fn = original[kCustomPromisifiedSymbol]
        validateFunction(fn, "util.promisify.custom")
        return Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true,
        })
    }
    const argumentNames = original[kCustomPromisifyArgsSymbol]
    function fn(...args) {
        return new Promise((resolve, reject) => {
            args.push((err, ...values) => {
                if (err) {
                    return reject(err)
                }
                if (argumentNames !== undefined && values.length > 1) {
                    const obj = {}
                    for (let i = 0; i < argumentNames.length; i++) {
                        obj[argumentNames[i]] = values[i]
                    }
                    resolve(obj)
                } else {
                    resolve(values[0])
                }
            })
            Reflect.apply(original, this, args)
        })
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original))
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true,
    })
    return Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original))
}
promisify.custom = kCustomPromisifiedSymbol
const utf8Encoder = new TextEncoder()
const float32Array = new Float32Array(1)
const uInt8Float32Array = new Uint8Array(float32Array.buffer)
const float64Array = new Float64Array(1)
const uInt8Float64Array = new Uint8Array(float64Array.buffer)
float32Array[0] = -1
const bigEndian = uInt8Float32Array[3] === 0
const kMaxLength = 2147483647
const MAX_UINT32 = 2 ** 32
const customInspectSymbol1 = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null
const INSPECT_MAX_BYTES = 50
const constants = {
    MAX_LENGTH: 2147483647,
    MAX_STRING_LENGTH: 536870888,
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function () {
        if (!Buffer.isBuffer(this)) {
            return void 0
        }
        return this.buffer
    },
})
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function () {
        if (!Buffer.isBuffer(this)) {
            return void 0
        }
        return this.byteOffset
    },
})
function createBuffer(length) {
    if (length > 2147483647) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"')
    }
    const buf = new Uint8Array(length)
    Object.setPrototypeOf(buf, Buffer.prototype)
    return buf
}
function Buffer(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
            throw new codes.ERR_INVALID_ARG_TYPE("string", "string", arg)
        }
        return _allocUnsafe(arg)
    }
    return _from(arg, encodingOrOffset, length)
}
Buffer.poolSize = 8192
function _from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
        return fromString(value, encodingOrOffset)
    }
    if (typeof value === "object" && value !== null) {
        if (isAnyArrayBuffer1(value)) {
            return fromArrayBuffer(value, encodingOrOffset, length)
        }
        const valueOf = value.valueOf && value.valueOf()
        if (valueOf != null && valueOf !== value && (typeof valueOf === "string" || typeof valueOf === "object")) {
            return _from(valueOf, encodingOrOffset, length)
        }
        const b = fromObject(value)
        if (b) {
            return b
        }
        if (typeof value[Symbol.toPrimitive] === "function") {
            const primitive = value[Symbol.toPrimitive]("string")
            if (typeof primitive === "string") {
                return fromString(primitive, encodingOrOffset)
            }
        }
    }
    throw new codes.ERR_INVALID_ARG_TYPE("first argument", ["string", "Buffer", "ArrayBuffer", "Array", "Array-like Object"], value)
}
Buffer.from = function from(value, encodingOrOffset, length) {
    return _from(value, encodingOrOffset, length)
}
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)
function assertSize(size) {
    validateNumber(size, "size")
    if (!(size >= 0 && size <= 2147483647)) {
        throw new codes.ERR_INVALID_ARG_VALUE.RangeError("size", size)
    }
}
function _alloc(size, fill, encoding) {
    assertSize(size)
    const buffer = createBuffer(size)
    if (fill !== undefined) {
        if (encoding !== undefined && typeof encoding !== "string") {
            throw new codes.ERR_INVALID_ARG_TYPE("encoding", "string", encoding)
        }
        return buffer.fill(fill, encoding)
    }
    return buffer
}
Buffer.alloc = function alloc(size, fill, encoding) {
    return _alloc(size, fill, encoding)
}
function _allocUnsafe(size) {
    assertSize(size)
    return createBuffer(size < 0 ? 0 : checked(size) | 0)
}
Buffer.allocUnsafe = function allocUnsafe(size) {
    return _allocUnsafe(size)
}
Buffer.allocUnsafeSlow = function allocUnsafeSlow(size) {
    return _allocUnsafe(size)
}
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8"
    }
    if (!Buffer.isEncoding(encoding)) {
        throw new codes.ERR_UNKNOWN_ENCODING(encoding)
    }
    const length = byteLength(string, encoding) | 0
    let buf = createBuffer(length)
    const actual = buf.write(string, encoding)
    if (actual !== length) {
        buf = buf.slice(0, actual)
    }
    return buf
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0
    const buf = createBuffer(length)
    for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
    }
    return buf
}
function fromObject(obj) {
    if (obj.length !== undefined || isAnyArrayBuffer1(obj.buffer)) {
        if (typeof obj.length !== "number") {
            return createBuffer(0)
        }
        return fromArrayLike(obj)
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data)
    }
}
function checked(length) {
    if (length >= 2147483647) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (2147483647).toString(16) + " bytes")
    }
    return length | 0
}
function SlowBuffer(length) {
    assertSize(length)
    return Buffer.alloc(+length)
}
Object.setPrototypeOf(SlowBuffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(SlowBuffer, Uint8Array)
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype
}
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) {
        a = Buffer.from(a, a.offset, a.byteLength)
    }
    if (isInstance(b, Uint8Array)) {
        b = Buffer.from(b, b.offset, b.byteLength)
    }
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')
    }
    if (a === b) {
        return 0
    }
    let x = a.length
    let y = b.length
    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
            x = a[i]
            y = b[i]
            break
        }
    }
    if (x < y) {
        return -1
    }
    if (y < x) {
        return 1
    }
    return 0
}
Buffer.isEncoding = function isEncoding(encoding) {
    return typeof encoding === "string" && encoding.length !== 0 && normalizeEncoding1(encoding) !== undefined
}
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
        throw new codes.ERR_INVALID_ARG_TYPE("list", "Array", list)
    }
    if (list.length === 0) {
        return Buffer.alloc(0)
    }
    if (length === undefined) {
        length = 0
        for (let i = 0; i < list.length; i++) {
            if (list[i].length) {
                length += list[i].length
            }
        }
    } else {
        validateOffset(length, "length")
    }
    const buffer = Buffer.allocUnsafe(length)
    let pos = 0
    for (let i = 0; i < list.length; i++) {
        const buf = list[i]
        if (!isUint8Array(buf)) {
            throw new codes.ERR_INVALID_ARG_TYPE(`list[${i}]`, ["Buffer", "Uint8Array"], list[i])
        }
        pos += _copyActual(buf, buffer, pos, 0, buf.length)
    }
    if (pos < length) {
        buffer.fill(0, pos, length)
    }
    return buffer
}
function byteLength(string, encoding) {
    if (typeof string !== "string") {
        if (isArrayBufferView(string) || isAnyArrayBuffer1(string)) {
            return string.byteLength
        }
        throw new codes.ERR_INVALID_ARG_TYPE("string", ["string", "Buffer", "ArrayBuffer"], string)
    }
    const len = string.length
    const mustMatch = arguments.length > 2 && arguments[2] === true
    if (!mustMatch && len === 0) {
        return 0
    }
    if (!encoding) {
        return mustMatch ? -1 : byteLengthUtf8(string)
    }
    const ops = getEncodingOps(encoding)
    if (ops === undefined) {
        return mustMatch ? -1 : byteLengthUtf8(string)
    }
    return ops.byteLength(string)
}
Buffer.byteLength = byteLength
Buffer.prototype._isBuffer = true
function swap(b, n, m) {
    const i = b[n]
    b[n] = b[m]
    b[m] = i
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length
    if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits")
    }
    for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
    }
    return this
}
Buffer.prototype.swap32 = function swap32() {
    const len = this.length
    if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits")
    }
    for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
    }
    return this
}
Buffer.prototype.swap64 = function swap64() {
    const len = this.length
    if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits")
    }
    for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
    }
    return this
}
Buffer.prototype.toString = function toString(encoding, start, end) {
    if (arguments.length === 0) {
        return this.utf8Slice(0, this.length)
    }
    const len = this.length
    if (start <= 0) {
        start = 0
    } else if (start >= len) {
        return ""
    } else {
        start |= 0
    }
    if (end === undefined || end > len) {
        end = len
    } else {
        end |= 0
    }
    if (end <= start) {
        return ""
    }
    if (encoding === undefined) {
        return this.utf8Slice(start, end)
    }
    const ops = getEncodingOps(encoding)
    if (ops === undefined) {
        throw new codes.ERR_UNKNOWN_ENCODING(encoding)
    }
    return ops.slice(this, start, end)
}
Buffer.prototype.toLocaleString = Buffer.prototype.toString
Buffer.prototype.equals = function equals(b) {
    if (!isUint8Array(b)) {
        throw new codes.ERR_INVALID_ARG_TYPE("otherBuffer", ["Buffer", "Uint8Array"], b)
    }
    if (this === b) {
        return true
    }
    return Buffer.compare(this, b) === 0
}
Buffer.prototype.inspect = function inspect() {
    let str = ""
    const max = INSPECT_MAX_BYTES
    str = this.toString("hex", 0, max)
        .replace(/(.{2})/g, "$1 ")
        .trim()
    if (this.length > max) {
        str += " ... "
    }
    return "<Buffer " + str + ">"
}
if (customInspectSymbol1) {
    Buffer.prototype[customInspectSymbol1] = Buffer.prototype.inspect
}
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength)
    }
    if (!Buffer.isBuffer(target)) {
        throw new codes.ERR_INVALID_ARG_TYPE("target", ["Buffer", "Uint8Array"], target)
    }
    if (start === undefined) {
        start = 0
    } else {
        validateOffset(start, "targetStart", 0, kMaxLength)
    }
    if (end === undefined) {
        end = target.length
    } else {
        validateOffset(end, "targetEnd", 0, target.length)
    }
    if (thisStart === undefined) {
        thisStart = 0
    } else {
        validateOffset(start, "sourceStart", 0, kMaxLength)
    }
    if (thisEnd === undefined) {
        thisEnd = this.length
    } else {
        validateOffset(end, "sourceEnd", 0, this.length)
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new codes.ERR_OUT_OF_RANGE("out of range index", "range")
    }
    if (thisStart >= thisEnd && start >= end) {
        return 0
    }
    if (thisStart >= thisEnd) {
        return -1
    }
    if (start >= end) {
        return 1
    }
    start >>>= 0
    end >>>= 0
    thisStart >>>= 0
    thisEnd >>>= 0
    if (this === target) {
        return 0
    }
    let x = thisEnd - thisStart
    let y = end - start
    const len = Math.min(x, y)
    const thisCopy = this.slice(thisStart, thisEnd)
    const targetCopy = target.slice(start, end)
    for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i]
            y = targetCopy[i]
            break
        }
    }
    if (x < y) {
        return -1
    }
    if (y < x) {
        return 1
    }
    return 0
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    validateBuffer(buffer)
    if (typeof byteOffset === "string") {
        encoding = byteOffset
        byteOffset = undefined
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
    }
    byteOffset = +byteOffset
    if (Number.isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length || buffer.byteLength
    }
    dir = !!dir
    if (typeof val === "number") {
        return indexOfNumber(buffer, val >>> 0, byteOffset, dir)
    }
    let ops
    if (encoding === undefined) {
        ops = encodingOps.utf8
    } else {
        ops = getEncodingOps(encoding)
    }
    if (typeof val === "string") {
        if (ops === undefined) {
            throw new codes.ERR_UNKNOWN_ENCODING(encoding)
        }
        return ops.indexOf(buffer, val, byteOffset, dir)
    }
    if (isUint8Array(val)) {
        const encodingVal = ops === undefined ? encodingsMap.utf8 : ops.encodingVal
        return indexOfBuffer(buffer, val, byteOffset, encodingVal, dir)
    }
    throw new codes.ERR_INVALID_ARG_TYPE("value", ["number", "string", "Buffer", "Uint8Array"], val)
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
}
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}
Buffer.prototype.asciiSlice = function asciiSlice(offset, length) {
    if (offset === 0 && length === this.length) {
        return bytesToAscii(this)
    } else {
        return bytesToAscii(this.slice(offset, length))
    }
}
Buffer.prototype.asciiWrite = function asciiWrite(string, offset, length) {
    return blitBuffer(asciiToBytes(string), this, offset, length)
}
Buffer.prototype.base64Slice = function base64Slice(offset, length) {
    if (offset === 0 && length === this.length) {
        return encode(this)
    } else {
        return encode(this.slice(offset, length))
    }
}
Buffer.prototype.base64Write = function base64Write(string, offset, length) {
    return blitBuffer(base64ToBytes(string), this, offset, length)
}
Buffer.prototype.base64urlSlice = function base64urlSlice(offset, length) {
    if (offset === 0 && length === this.length) {
        return encode1(this)
    } else {
        return encode1(this.slice(offset, length))
    }
}
Buffer.prototype.base64urlWrite = function base64urlWrite(string, offset, length) {
    return blitBuffer(base64UrlToBytes(string), this, offset, length)
}
Buffer.prototype.hexWrite = function hexWrite(string, offset, length) {
    return blitBuffer(hexToBytes(string, this.length - offset), this, offset, length)
}
Buffer.prototype.hexSlice = function hexSlice(string, offset, length) {
    return _hexSlice(this, string, offset, length)
}
Buffer.prototype.latin1Slice = function latin1Slice(string, offset, length) {
    return _latin1Slice(this, string, offset, length)
}
Buffer.prototype.latin1Write = function latin1Write(string, offset, length) {
    return blitBuffer(asciiToBytes(string), this, offset, length)
}
Buffer.prototype.ucs2Slice = function ucs2Slice(offset, length) {
    if (offset === 0 && length === this.length) {
        return bytesToUtf16le(this)
    } else {
        return bytesToUtf16le(this.slice(offset, length))
    }
}
Buffer.prototype.ucs2Write = function ucs2Write(string, offset, length) {
    return blitBuffer(utf16leToBytes(string, this.length - offset), this, offset, length)
}
Buffer.prototype.utf8Slice = function utf8Slice(string, offset, length) {
    return _utf8Slice(this, string, offset, length)
}
Buffer.prototype.utf8Write = function utf8Write(string, offset, length) {
    return blitBuffer(utf8ToBytes(string, this.length - offset), this, offset, length)
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
        return this.utf8Write(string, 0, this.length)
    }
    if (length === undefined && typeof offset === "string") {
        encoding = offset
        length = this.length
        offset = 0
    } else {
        validateOffset(offset, "offset", 0, this.length)
        const remaining = this.length - offset
        if (length === undefined) {
            length = remaining
        } else if (typeof length === "string") {
            encoding = length
            length = remaining
        } else {
            validateOffset(length, "length", 0, this.length)
            if (length > remaining) {
                length = remaining
            }
        }
    }
    if (!encoding) {
        return this.utf8Write(string, offset, length)
    }
    const ops = getEncodingOps(encoding)
    if (ops === undefined) {
        throw new codes.ERR_UNKNOWN_ENCODING(encoding)
    }
    return ops.write(this, string, offset, length)
}
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
    }
}
function fromArrayBuffer(obj, byteOffset, length) {
    if (byteOffset === undefined) {
        byteOffset = 0
    } else {
        byteOffset = +byteOffset
        if (Number.isNaN(byteOffset)) {
            byteOffset = 0
        }
    }
    const maxLength = obj.byteLength - byteOffset
    if (maxLength < 0) {
        throw new codes.ERR_BUFFER_OUT_OF_BOUNDS("offset")
    }
    if (length === undefined) {
        length = maxLength
    } else {
        length = +length
        if (length > 0) {
            if (length > maxLength) {
                throw new codes.ERR_BUFFER_OUT_OF_BOUNDS("length")
            }
        } else {
            length = 0
        }
    }
    const buffer = new Uint8Array(obj, byteOffset, length)
    Object.setPrototypeOf(buffer, Buffer.prototype)
    return buffer
}
const decoder = new TextDecoder()
function _utf8Slice(buf, start, end) {
    return decoder.decode(buf.slice(start, end))
}
function _latin1Slice(buf, start, end) {
    let ret = ""
    end = Math.min(buf.length, end)
    for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
    }
    return ret
}
function _hexSlice(buf, start, end) {
    const len = buf.length
    if (!start || start < 0) {
        start = 0
    }
    if (!end || end < 0 || end > len) {
        end = len
    }
    let out = ""
    for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]]
    }
    return out
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length
    start = ~~start
    end = end === void 0 ? len : ~~end
    if (start < 0) {
        start += len
        if (start < 0) {
            start = 0
        }
    } else if (start > len) {
        start = len
    }
    if (end < 0) {
        end += len
        if (end < 0) {
            end = 0
        }
    } else if (end > len) {
        end = len
    }
    if (end < start) {
        end = start
    }
    const newBuf = this.subarray(start, end)
    Object.setPrototypeOf(newBuf, Buffer.prototype)
    return newBuf
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset)
    }
    if (byteLength === 6) {
        return readUInt48LE(this, offset)
    }
    if (byteLength === 5) {
        return readUInt40LE(this, offset)
    }
    if (byteLength === 3) {
        return readUInt24LE(this, offset)
    }
    if (byteLength === 4) {
        return this.readUInt32LE(offset)
    }
    if (byteLength === 2) {
        return this.readUInt16LE(offset)
    }
    if (byteLength === 1) {
        return this.readUInt8(offset)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset)
    }
    if (byteLength === 6) {
        return readUInt48BE(this, offset)
    }
    if (byteLength === 5) {
        return readUInt40BE(this, offset)
    }
    if (byteLength === 3) {
        return readUInt24BE(this, offset)
    }
    if (byteLength === 4) {
        return this.readUInt32BE(offset)
    }
    if (byteLength === 2) {
        return this.readUInt16BE(offset)
    }
    if (byteLength === 1) {
        return this.readUInt8(offset)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset = 0) {
    validateNumber(offset, "offset")
    const val = this[offset]
    if (val === undefined) {
        boundsError(offset, this.length - 1)
    }
    return val
}
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = readUInt16BE
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 1]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2)
    }
    return first + last * 2 ** 8
}
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 3]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4)
    }
    return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24
}
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = readUInt32BE
Buffer.prototype.readBigUint64LE = Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 7]
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8)
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24
    return BigInt(lo) + (BigInt(hi) << BigInt(32))
})
Buffer.prototype.readBigUint64BE = Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 7]
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8)
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset]
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last
    return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset)
    }
    if (byteLength === 6) {
        return readInt48LE(this, offset)
    }
    if (byteLength === 5) {
        return readInt40LE(this, offset)
    }
    if (byteLength === 3) {
        return readInt24LE(this, offset)
    }
    if (byteLength === 4) {
        return this.readInt32LE(offset)
    }
    if (byteLength === 2) {
        return this.readInt16LE(offset)
    }
    if (byteLength === 1) {
        return this.readInt8(offset)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset)
    }
    if (byteLength === 6) {
        return readInt48BE(this, offset)
    }
    if (byteLength === 5) {
        return readInt40BE(this, offset)
    }
    if (byteLength === 3) {
        return readInt24BE(this, offset)
    }
    if (byteLength === 4) {
        return this.readInt32BE(offset)
    }
    if (byteLength === 2) {
        return this.readInt16BE(offset)
    }
    if (byteLength === 1) {
        return this.readInt8(offset)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.readInt8 = function readInt8(offset = 0) {
    validateNumber(offset, "offset")
    const val = this[offset]
    if (val === undefined) {
        boundsError(offset, this.length - 1)
    }
    return val | ((val & (2 ** 7)) * 0x1fffffe)
}
Buffer.prototype.readInt16LE = function readInt16LE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 1]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2)
    }
    const val = first + last * 2 ** 8
    return val | ((val & (2 ** 15)) * 0x1fffe)
}
Buffer.prototype.readInt16BE = function readInt16BE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 1]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2)
    }
    const val = first * 2 ** 8 + last
    return val | ((val & (2 ** 15)) * 0x1fffe)
}
Buffer.prototype.readInt32LE = function readInt32LE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 3]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4)
    }
    return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + (last << 24)
}
Buffer.prototype.readInt32BE = function readInt32BE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 3]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4)
    }
    return (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last
}
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 7]
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8)
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24)
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24)
})
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 7]
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8)
    }
    const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset]
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last)
})
Buffer.prototype.readFloatLE = function readFloatLE(offset) {
    return bigEndian ? readFloatBackwards(this, offset) : readFloatForwards(this, offset)
}
Buffer.prototype.readFloatBE = function readFloatBE(offset) {
    return bigEndian ? readFloatForwards(this, offset) : readFloatBackwards(this, offset)
}
Buffer.prototype.readDoubleLE = function readDoubleLE(offset) {
    return bigEndian ? readDoubleBackwards(this, offset) : readDoubleForwards(this, offset)
}
Buffer.prototype.readDoubleBE = function readDoubleBE(offset) {
    return bigEndian ? readDoubleForwards(this, offset) : readDoubleBackwards(this, offset)
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48LE(this, value, offset, 0, 0xffffffffffff)
    }
    if (byteLength === 5) {
        return writeU_Int40LE(this, value, offset, 0, 0xffffffffff)
    }
    if (byteLength === 3) {
        return writeU_Int24LE(this, value, offset, 0, 0xffffff)
    }
    if (byteLength === 4) {
        return writeU_Int32LE(this, value, offset, 0, 0xffffffff)
    }
    if (byteLength === 2) {
        return writeU_Int16LE(this, value, offset, 0, 0xffff)
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, 0, 0xff)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48BE(this, value, offset, 0, 0xffffffffffff)
    }
    if (byteLength === 5) {
        return writeU_Int40BE(this, value, offset, 0, 0xffffffffff)
    }
    if (byteLength === 3) {
        return writeU_Int24BE(this, value, offset, 0, 0xffffff)
    }
    if (byteLength === 4) {
        return writeU_Int32BE(this, value, offset, 0, 0xffffffff)
    }
    if (byteLength === 2) {
        return writeU_Int16BE(this, value, offset, 0, 0xffff)
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, 0, 0xff)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset = 0) {
    return writeU_Int8(this, value, offset, 0, 0xff)
}
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset = 0) {
    return writeU_Int16LE(this, value, offset, 0, 0xffff)
}
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset = 0) {
    return writeU_Int16BE(this, value, offset, 0, 0xffff)
}
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset = 0) {
    return _writeUInt32LE(this, value, offset, 0, 0xffffffff)
}
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset = 0) {
    return _writeUInt32BE(this, value, offset, 0, 0xffffffff)
}
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7)
    let lo = Number(value & BigInt(4294967295))
    buf[offset++] = lo
    lo = lo >> 8
    buf[offset++] = lo
    lo = lo >> 8
    buf[offset++] = lo
    lo = lo >> 8
    buf[offset++] = lo
    let hi = Number((value >> BigInt(32)) & BigInt(4294967295))
    buf[offset++] = hi
    hi = hi >> 8
    buf[offset++] = hi
    hi = hi >> 8
    buf[offset++] = hi
    hi = hi >> 8
    buf[offset++] = hi
    return offset
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7)
    let lo = Number(value & BigInt(4294967295))
    buf[offset + 7] = lo
    lo = lo >> 8
    buf[offset + 6] = lo
    lo = lo >> 8
    buf[offset + 5] = lo
    lo = lo >> 8
    buf[offset + 4] = lo
    let hi = Number((value >> BigInt(32)) & BigInt(4294967295))
    buf[offset + 3] = hi
    hi = hi >> 8
    buf[offset + 2] = hi
    hi = hi >> 8
    buf[offset + 1] = hi
    hi = hi >> 8
    buf[offset] = hi
    return offset + 8
}
Buffer.prototype.writeBigUint64LE = Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"))
})
Buffer.prototype.writeBigUint64BE = Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"))
})
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48LE(this, value, offset, -0x800000000000, 0x7fffffffffff)
    }
    if (byteLength === 5) {
        return writeU_Int40LE(this, value, offset, -0x8000000000, 0x7fffffffff)
    }
    if (byteLength === 3) {
        return writeU_Int24LE(this, value, offset, -0x800000, 0x7fffff)
    }
    if (byteLength === 4) {
        return writeU_Int32LE(this, value, offset, -0x80000000, 0x7fffffff)
    }
    if (byteLength === 2) {
        return writeU_Int16LE(this, value, offset, -0x8000, 0x7fff)
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, -0x80, 0x7f)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48BE(this, value, offset, -0x800000000000, 0x7fffffffffff)
    }
    if (byteLength === 5) {
        return writeU_Int40BE(this, value, offset, -0x8000000000, 0x7fffffffff)
    }
    if (byteLength === 3) {
        return writeU_Int24BE(this, value, offset, -0x800000, 0x7fffff)
    }
    if (byteLength === 4) {
        return writeU_Int32BE(this, value, offset, -0x80000000, 0x7fffffff)
    }
    if (byteLength === 2) {
        return writeU_Int16BE(this, value, offset, -0x8000, 0x7fff)
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, -0x80, 0x7f)
    }
    boundsError(byteLength, 6, "byteLength")
}
Buffer.prototype.writeInt8 = function writeInt8(value, offset = 0) {
    return writeU_Int8(this, value, offset, -0x80, 0x7f)
}
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset = 0) {
    return writeU_Int16LE(this, value, offset, -0x8000, 0x7fff)
}
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset = 0) {
    return writeU_Int16BE(this, value, offset, -0x8000, 0x7fff)
}
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset = 0) {
    return writeU_Int32LE(this, value, offset, -0x80000000, 0x7fffffff)
}
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset = 0) {
    return writeU_Int32BE(this, value, offset, -0x80000000, 0x7fffffff)
}
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
})
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
})
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset) {
    return bigEndian ? writeFloatBackwards(this, value, offset) : writeFloatForwards(this, value, offset)
}
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset) {
    return bigEndian ? writeFloatForwards(this, value, offset) : writeFloatBackwards(this, value, offset)
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset) {
    return bigEndian ? writeDoubleBackwards(this, value, offset) : writeDoubleForwards(this, value, offset)
}
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset) {
    return bigEndian ? writeDoubleForwards(this, value, offset) : writeDoubleBackwards(this, value, offset)
}
Buffer.prototype.copy = function copy(target, targetStart, sourceStart, sourceEnd) {
    if (!isUint8Array(this)) {
        throw new codes.ERR_INVALID_ARG_TYPE("source", ["Buffer", "Uint8Array"], this)
    }
    if (!isUint8Array(target)) {
        throw new codes.ERR_INVALID_ARG_TYPE("target", ["Buffer", "Uint8Array"], target)
    }
    if (targetStart === undefined) {
        targetStart = 0
    } else {
        targetStart = toInteger(targetStart, 0)
        if (targetStart < 0) {
            throw new codes.ERR_OUT_OF_RANGE("targetStart", ">= 0", targetStart)
        }
    }
    if (sourceStart === undefined) {
        sourceStart = 0
    } else {
        sourceStart = toInteger(sourceStart, 0)
        if (sourceStart < 0) {
            throw new codes.ERR_OUT_OF_RANGE("sourceStart", ">= 0", sourceStart)
        }
        if (sourceStart >= MAX_UINT32) {
            throw new codes.ERR_OUT_OF_RANGE("sourceStart", `< ${MAX_UINT32}`, sourceStart)
        }
    }
    if (sourceEnd === undefined) {
        sourceEnd = this.length
    } else {
        sourceEnd = toInteger(sourceEnd, 0)
        if (sourceEnd < 0) {
            throw new codes.ERR_OUT_OF_RANGE("sourceEnd", ">= 0", sourceEnd)
        }
        if (sourceEnd >= MAX_UINT32) {
            throw new codes.ERR_OUT_OF_RANGE("sourceEnd", `< ${MAX_UINT32}`, sourceEnd)
        }
    }
    if (targetStart >= target.length) {
        return 0
    }
    if (sourceEnd > 0 && sourceEnd < sourceStart) {
        sourceEnd = sourceStart
    }
    if (sourceEnd === sourceStart) {
        return 0
    }
    if (target.length === 0 || this.length === 0) {
        return 0
    }
    if (sourceEnd > this.length) {
        sourceEnd = this.length
    }
    if (target.length - targetStart < sourceEnd - sourceStart) {
        sourceEnd = target.length - targetStart + sourceStart
    }
    const len = sourceEnd - sourceStart
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, sourceStart, sourceEnd)
    } else {
        Uint8Array.prototype.set.call(target, this.subarray(sourceStart, sourceEnd), targetStart)
    }
    return len
}
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start
            start = 0
            end = this.length
        } else if (typeof end === "string") {
            encoding = end
            end = this.length
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string")
        }
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding)
        }
        if (val.length === 1) {
            const code = val.charCodeAt(0)
            if ((encoding === "utf8" && code < 128) || encoding === "latin1") {
                val = code
            }
        }
    } else if (typeof val === "number") {
        val = val & 255
    } else if (typeof val === "boolean") {
        val = Number(val)
    }
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index")
    }
    if (end <= start) {
        return this
    }
    start = start >>> 0
    end = end === void 0 ? this.length : end >>> 0
    if (!val) {
        val = 0
    }
    let i
    if (typeof val === "number") {
        for (i = start; i < end; ++i) {
            this[i] = val
        }
    } else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding)
        const len = bytes.length
        if (len === 0) {
            throw new codes.ERR_INVALID_ARG_VALUE("value", val)
        }
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len]
        }
    }
    return this
}
function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset")
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1))
    }
}
function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : ""
        let range
        if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`
            } else {
                range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`
        }
        throw new codes.ERR_OUT_OF_RANGE("value", range, value)
    }
    checkBounds(buf, offset, byteLength2)
}
function utf8ToBytes(string, units) {
    units = units || Infinity
    let codePoint
    const length = string.length
    let leadSurrogate = null
    const bytes = []
    for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)
        if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
                if (codePoint > 56319) {
                    if ((units -= 3) > -1) {
                        bytes.push(239, 191, 189)
                    }
                    continue
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1) {
                        bytes.push(239, 191, 189)
                    }
                    continue
                }
                leadSurrogate = codePoint
                continue
            }
            if (codePoint < 56320) {
                if ((units -= 3) > -1) {
                    bytes.push(239, 191, 189)
                }
                leadSurrogate = codePoint
                continue
            }
            codePoint = (((leadSurrogate - 55296) << 10) | (codePoint - 56320)) + 65536
        } else if (leadSurrogate) {
            if ((units -= 3) > -1) {
                bytes.push(239, 191, 189)
            }
        }
        leadSurrogate = null
        if (codePoint < 128) {
            if ((units -= 1) < 0) {
                break
            }
            bytes.push(codePoint)
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) {
                break
            }
            bytes.push((codePoint >> 6) | 192, (codePoint & 63) | 128)
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) {
                break
            }
            bytes.push((codePoint >> 12) | 224, ((codePoint >> 6) & 63) | 128, (codePoint & 63) | 128)
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) {
                break
            }
            bytes.push((codePoint >> 18) | 240, ((codePoint >> 12) & 63) | 128, ((codePoint >> 6) & 63) | 128, (codePoint & 63) | 128)
        } else {
            throw new Error("Invalid code point")
        }
    }
    return bytes
}
function blitBuffer(src, dst, offset, byteLength) {
    let i
    const length = byteLength === undefined ? src.length : byteLength
    for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) {
            break
        }
        dst[i + offset] = src[i]
    }
    return i
}
function isInstance(obj, type) {
    return obj instanceof type || (obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name)
}
const hexSliceLookupTable = (function () {
    const alphabet = "0123456789abcdef"
    const table = new Array(256)
    for (let i = 0; i < 16; ++i) {
        const i16 = i * 16
        for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j]
        }
    }
    return table
})()
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported")
}
const atob1 = globalThis.atob
const Blob = globalThis.Blob
const btoa = globalThis.btoa
function readUInt48LE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 5]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6)
    }
    return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + (buf[++offset] + last * 2 ** 8) * 2 ** 32
}
function readUInt40LE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 4]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5)
    }
    return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + last * 2 ** 32
}
function readUInt24LE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 2]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3)
    }
    return first + buf[++offset] * 2 ** 8 + last * 2 ** 16
}
function readUInt48BE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 5]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6)
    }
    return (first * 2 ** 8 + buf[++offset]) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last
}
function readUInt40BE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 4]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5)
    }
    return first * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last
}
function readUInt24BE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 2]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3)
    }
    return first * 2 ** 16 + buf[++offset] * 2 ** 8 + last
}
function readUInt16BE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 1]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2)
    }
    return first * 2 ** 8 + last
}
function readUInt32BE(offset = 0) {
    validateNumber(offset, "offset")
    const first = this[offset]
    const last = this[offset + 3]
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4)
    }
    return first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last
}
function readDoubleBackwards(buffer, offset = 0) {
    validateNumber(offset, "offset")
    const first = buffer[offset]
    const last = buffer[offset + 7]
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 8)
    }
    uInt8Float64Array[7] = first
    uInt8Float64Array[6] = buffer[++offset]
    uInt8Float64Array[5] = buffer[++offset]
    uInt8Float64Array[4] = buffer[++offset]
    uInt8Float64Array[3] = buffer[++offset]
    uInt8Float64Array[2] = buffer[++offset]
    uInt8Float64Array[1] = buffer[++offset]
    uInt8Float64Array[0] = last
    return float64Array[0]
}
function readDoubleForwards(buffer, offset = 0) {
    validateNumber(offset, "offset")
    const first = buffer[offset]
    const last = buffer[offset + 7]
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 8)
    }
    uInt8Float64Array[0] = first
    uInt8Float64Array[1] = buffer[++offset]
    uInt8Float64Array[2] = buffer[++offset]
    uInt8Float64Array[3] = buffer[++offset]
    uInt8Float64Array[4] = buffer[++offset]
    uInt8Float64Array[5] = buffer[++offset]
    uInt8Float64Array[6] = buffer[++offset]
    uInt8Float64Array[7] = last
    return float64Array[0]
}
function writeDoubleForwards(buffer, val, offset = 0) {
    val = +val
    checkBounds(buffer, offset, 7)
    float64Array[0] = val
    buffer[offset++] = uInt8Float64Array[0]
    buffer[offset++] = uInt8Float64Array[1]
    buffer[offset++] = uInt8Float64Array[2]
    buffer[offset++] = uInt8Float64Array[3]
    buffer[offset++] = uInt8Float64Array[4]
    buffer[offset++] = uInt8Float64Array[5]
    buffer[offset++] = uInt8Float64Array[6]
    buffer[offset++] = uInt8Float64Array[7]
    return offset
}
function writeDoubleBackwards(buffer, val, offset = 0) {
    val = +val
    checkBounds(buffer, offset, 7)
    float64Array[0] = val
    buffer[offset++] = uInt8Float64Array[7]
    buffer[offset++] = uInt8Float64Array[6]
    buffer[offset++] = uInt8Float64Array[5]
    buffer[offset++] = uInt8Float64Array[4]
    buffer[offset++] = uInt8Float64Array[3]
    buffer[offset++] = uInt8Float64Array[2]
    buffer[offset++] = uInt8Float64Array[1]
    buffer[offset++] = uInt8Float64Array[0]
    return offset
}
function readFloatBackwards(buffer, offset = 0) {
    validateNumber(offset, "offset")
    const first = buffer[offset]
    const last = buffer[offset + 3]
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 4)
    }
    uInt8Float32Array[3] = first
    uInt8Float32Array[2] = buffer[++offset]
    uInt8Float32Array[1] = buffer[++offset]
    uInt8Float32Array[0] = last
    return float32Array[0]
}
function readFloatForwards(buffer, offset = 0) {
    validateNumber(offset, "offset")
    const first = buffer[offset]
    const last = buffer[offset + 3]
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 4)
    }
    uInt8Float32Array[0] = first
    uInt8Float32Array[1] = buffer[++offset]
    uInt8Float32Array[2] = buffer[++offset]
    uInt8Float32Array[3] = last
    return float32Array[0]
}
function writeFloatForwards(buffer, val, offset = 0) {
    val = +val
    checkBounds(buffer, offset, 3)
    float32Array[0] = val
    buffer[offset++] = uInt8Float32Array[0]
    buffer[offset++] = uInt8Float32Array[1]
    buffer[offset++] = uInt8Float32Array[2]
    buffer[offset++] = uInt8Float32Array[3]
    return offset
}
function writeFloatBackwards(buffer, val, offset = 0) {
    val = +val
    checkBounds(buffer, offset, 3)
    float32Array[0] = val
    buffer[offset++] = uInt8Float32Array[3]
    buffer[offset++] = uInt8Float32Array[2]
    buffer[offset++] = uInt8Float32Array[1]
    buffer[offset++] = uInt8Float32Array[0]
    return offset
}
function readInt24LE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 2]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3)
    }
    const val = first + buf[++offset] * 2 ** 8 + last * 2 ** 16
    return val | ((val & (2 ** 23)) * 0x1fe)
}
function readInt40LE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 4]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5)
    }
    return (last | ((last & (2 ** 7)) * 0x1fffffe)) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24
}
function readInt48LE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 5]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6)
    }
    const val = buf[offset + 4] + last * 2 ** 8
    return (val | ((val & (2 ** 15)) * 0x1fffe)) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24
}
function readInt24BE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 2]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3)
    }
    const val = first * 2 ** 16 + buf[++offset] * 2 ** 8 + last
    return val | ((val & (2 ** 23)) * 0x1fe)
}
function readInt48BE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 5]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6)
    }
    const val = buf[++offset] + first * 2 ** 8
    return (val | ((val & (2 ** 15)) * 0x1fffe)) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last
}
function readInt40BE(buf, offset = 0) {
    validateNumber(offset, "offset")
    const first = buf[offset]
    const last = buf[offset + 4]
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5)
    }
    return (first | ((first & (2 ** 7)) * 0x1fffffe)) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last
}
function byteLengthUtf8(str) {
    return utf8Encoder.encode(str).length
}
function base64ByteLength(str, bytes) {
    if (str.charCodeAt(bytes - 1) === 0x3d) {
        bytes--
    }
    if (bytes > 1 && str.charCodeAt(bytes - 1) === 0x3d) {
        bytes--
    }
    return (bytes * 3) >>> 2
}
const encodingsMap = Object.create(null)
for (let i = 0; i < encodings.length; ++i) {
    encodingsMap[encodings[i]] = i
}
const encodingOps = {
    ascii: {
        byteLength: (string) => string.length,
        encoding: "ascii",
        encodingVal: encodingsMap.ascii,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, asciiToBytes(val), byteOffset, encodingsMap.ascii, dir),
        slice: (buf, start, end) => buf.asciiSlice(start, end),
        write: (buf, string, offset, len) => buf.asciiWrite(string, offset, len),
    },
    base64: {
        byteLength: (string) => base64ByteLength(string, string.length),
        encoding: "base64",
        encodingVal: encodingsMap.base64,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, base64ToBytes(val), byteOffset, encodingsMap.base64, dir),
        slice: (buf, start, end) => buf.base64Slice(start, end),
        write: (buf, string, offset, len) => buf.base64Write(string, offset, len),
    },
    base64url: {
        byteLength: (string) => base64ByteLength(string, string.length),
        encoding: "base64url",
        encodingVal: encodingsMap.base64url,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, base64UrlToBytes(val), byteOffset, encodingsMap.base64url, dir),
        slice: (buf, start, end) => buf.base64urlSlice(start, end),
        write: (buf, string, offset, len) => buf.base64urlWrite(string, offset, len),
    },
    hex: {
        byteLength: (string) => string.length >>> 1,
        encoding: "hex",
        encodingVal: encodingsMap.hex,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, hexToBytes(val), byteOffset, encodingsMap.hex, dir),
        slice: (buf, start, end) => buf.hexSlice(start, end),
        write: (buf, string, offset, len) => buf.hexWrite(string, offset, len),
    },
    latin1: {
        byteLength: (string) => string.length,
        encoding: "latin1",
        encodingVal: encodingsMap.latin1,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, asciiToBytes(val), byteOffset, encodingsMap.latin1, dir),
        slice: (buf, start, end) => buf.latin1Slice(start, end),
        write: (buf, string, offset, len) => buf.latin1Write(string, offset, len),
    },
    ucs2: {
        byteLength: (string) => string.length * 2,
        encoding: "ucs2",
        encodingVal: encodingsMap.utf16le,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, utf16leToBytes(val), byteOffset, encodingsMap.utf16le, dir),
        slice: (buf, start, end) => buf.ucs2Slice(start, end),
        write: (buf, string, offset, len) => buf.ucs2Write(string, offset, len),
    },
    utf8: {
        byteLength: byteLengthUtf8,
        encoding: "utf8",
        encodingVal: encodingsMap.utf8,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, utf8Encoder.encode(val), byteOffset, encodingsMap.utf8, dir),
        slice: (buf, start, end) => buf.utf8Slice(start, end),
        write: (buf, string, offset, len) => buf.utf8Write(string, offset, len),
    },
    utf16le: {
        byteLength: (string) => string.length * 2,
        encoding: "utf16le",
        encodingVal: encodingsMap.utf16le,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, utf16leToBytes(val), byteOffset, encodingsMap.utf16le, dir),
        slice: (buf, start, end) => buf.ucs2Slice(start, end),
        write: (buf, string, offset, len) => buf.ucs2Write(string, offset, len),
    },
}
function getEncodingOps(encoding) {
    encoding = String(encoding).toLowerCase()
    switch (encoding.length) {
        case 4:
            if (encoding === "utf8") return encodingOps.utf8
            if (encoding === "ucs2") return encodingOps.ucs2
            break
        case 5:
            if (encoding === "utf-8") return encodingOps.utf8
            if (encoding === "ascii") return encodingOps.ascii
            if (encoding === "ucs-2") return encodingOps.ucs2
            break
        case 7:
            if (encoding === "utf16le") {
                return encodingOps.utf16le
            }
            break
        case 8:
            if (encoding === "utf-16le") {
                return encodingOps.utf16le
            }
            break
        case 6:
            if (encoding === "latin1" || encoding === "binary") {
                return encodingOps.latin1
            }
            if (encoding === "base64") return encodingOps.base64
        case 3:
            if (encoding === "hex") {
                return encodingOps.hex
            }
            break
        case 9:
            if (encoding === "base64url") {
                return encodingOps.base64url
            }
            break
    }
}
function _copyActual(source, target, targetStart, sourceStart, sourceEnd) {
    if (sourceEnd - sourceStart > target.length - targetStart) {
        sourceEnd = sourceStart + target.length - targetStart
    }
    let nb = sourceEnd - sourceStart
    const sourceLen = source.length - sourceStart
    if (nb > sourceLen) {
        nb = sourceLen
    }
    if (sourceStart !== 0 || sourceEnd < source.length) {
        source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb)
    }
    target.set(source, targetStart)
    return nb
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type)
        throw new codes.ERR_OUT_OF_RANGE(type || "offset", "an integer", value)
    }
    if (length < 0) {
        throw new codes.ERR_BUFFER_OUT_OF_BOUNDS()
    }
    throw new codes.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value)
}
function validateNumber(value, name) {
    if (typeof value !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value)
    }
}
function checkInt(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : ""
        let range
        if (byteLength > 3) {
            if (min === 0 || min === 0n) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
            } else {
                range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and ` + `< 2${n} ** ${(byteLength + 1) * 8 - 1}${n}`
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`
        }
        throw new codes.ERR_OUT_OF_RANGE("value", range, value)
    }
    checkBounds(buf, offset, byteLength)
}
function toInteger(n, defaultVal) {
    n = +n
    if (!Number.isNaN(n) && n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) {
        return n % 1 === 0 ? n : Math.floor(n)
    }
    return defaultVal
}
function writeU_Int8(buf, value, offset, min, max) {
    value = +value
    validateNumber(offset, "offset")
    if (value > max || value < min) {
        throw new codes.ERR_OUT_OF_RANGE("value", `>= ${min} and <= ${max}`, value)
    }
    if (buf[offset] === undefined) {
        boundsError(offset, buf.length - 1)
    }
    buf[offset] = value
    return offset + 1
}
function writeU_Int16BE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 1)
    buf[offset++] = value >>> 8
    buf[offset++] = value
    return offset
}
function _writeUInt32LE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 3)
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    return offset
}
function writeU_Int16LE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 1)
    buf[offset++] = value
    buf[offset++] = value >>> 8
    return offset
}
function _writeUInt32BE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 3)
    buf[offset + 3] = value
    value = value >>> 8
    buf[offset + 2] = value
    value = value >>> 8
    buf[offset + 1] = value
    value = value >>> 8
    buf[offset] = value
    return offset + 4
}
function writeU_Int48BE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 5)
    const newVal = Math.floor(value * 2 ** -32)
    buf[offset++] = newVal >>> 8
    buf[offset++] = newVal
    buf[offset + 3] = value
    value = value >>> 8
    buf[offset + 2] = value
    value = value >>> 8
    buf[offset + 1] = value
    value = value >>> 8
    buf[offset] = value
    return offset + 4
}
function writeU_Int40BE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 4)
    buf[offset++] = Math.floor(value * 2 ** -32)
    buf[offset + 3] = value
    value = value >>> 8
    buf[offset + 2] = value
    value = value >>> 8
    buf[offset + 1] = value
    value = value >>> 8
    buf[offset] = value
    return offset + 4
}
function writeU_Int32BE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 3)
    buf[offset + 3] = value
    value = value >>> 8
    buf[offset + 2] = value
    value = value >>> 8
    buf[offset + 1] = value
    value = value >>> 8
    buf[offset] = value
    return offset + 4
}
function writeU_Int24BE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 2)
    buf[offset + 2] = value
    value = value >>> 8
    buf[offset + 1] = value
    value = value >>> 8
    buf[offset] = value
    return offset + 3
}
function validateOffset(value, name, min = 0, max = Number.MAX_SAFE_INTEGER) {
    if (typeof value !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value)
    }
    if (!Number.isInteger(value)) {
        throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value)
    }
    if (value < min || value > max) {
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
    }
}
function writeU_Int48LE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 5)
    const newVal = Math.floor(value * 2 ** -32)
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    buf[offset++] = newVal
    buf[offset++] = newVal >>> 8
    return offset
}
function writeU_Int40LE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 4)
    const newVal = value
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    buf[offset++] = Math.floor(newVal * 2 ** -32)
    return offset
}
function writeU_Int32LE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 3)
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    return offset
}
function writeU_Int24LE(buf, value, offset, min, max) {
    value = +value
    checkInt(value, min, max, buf, offset, 2)
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    value = value >>> 8
    buf[offset++] = value
    return offset
}
const __default3 = {
    atob: atob1,
    btoa,
    Blob,
    Buffer,
    constants,
    kMaxLength: 2147483647,
    kStringMaxLength: 536870888,
    SlowBuffer,
}
;("use strict")
const kEscape = "\x1b"
Symbol("kSubstringSearch")
function CSI(strings, ...args) {
    let ret = `${kEscape}[`
    for (let n = 0; n < strings.length; n++) {
        ret += strings[n]
        if (n < args.length) {
            ret += args[n]
        }
    }
    return ret
}
CSI.kEscape = kEscape
CSI.kClearToLineBeginning = CSI`1K`
CSI.kClearToLineEnd = CSI`0K`
CSI.kClearLine = CSI`2K`
CSI.kClearScreenDown = CSI`0J`
;("use strict")
const { kClearLine, kClearScreenDown, kClearToLineBeginning, kClearToLineEnd } = CSI
function cursorTo(stream, x, y, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback")
    }
    if (typeof y === "function") {
        callback = y
        y = undefined
    }
    if (Number.isNaN(x)) throw new ERR_INVALID_ARG_VALUE("x", x)
    if (Number.isNaN(y)) throw new ERR_INVALID_ARG_VALUE("y", y)
    if (stream == null || (typeof x !== "number" && typeof y !== "number")) {
        if (typeof callback === "function") process.nextTick(callback, null)
        return true
    }
    if (typeof x !== "number") throw new ERR_INVALID_CURSOR_POS()
    const data = typeof y !== "number" ? CSI`${x + 1}G` : CSI`${y + 1};${x + 1}H`
    return stream.write(data, callback)
}
function moveCursor(stream, dx, dy, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback")
    }
    if (stream == null || !(dx || dy)) {
        if (typeof callback === "function") process.nextTick(callback, null)
        return true
    }
    let data = ""
    if (dx < 0) {
        data += CSI`${-dx}D`
    } else if (dx > 0) {
        data += CSI`${dx}C`
    }
    if (dy < 0) {
        data += CSI`${-dy}A`
    } else if (dy > 0) {
        data += CSI`${dy}B`
    }
    return stream.write(data, callback)
}
function clearLine(stream, dir, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback")
    }
    if (stream === null || stream === undefined) {
        if (typeof callback === "function") process.nextTick(callback, null)
        return true
    }
    const type = dir < 0 ? kClearToLineBeginning : dir > 0 ? kClearToLineEnd : kClearLine
    return stream.write(type, callback)
}
function clearScreenDown(stream, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback")
    }
    if (stream === null || stream === undefined) {
        if (typeof callback === "function") process.nextTick(callback, null)
        return true
    }
    return stream.write(kClearScreenDown, callback)
}
const stdio = {}
var NotImplemented
;(function (NotImplemented) {
    NotImplemented[(NotImplemented["ascii"] = 0)] = "ascii"
    NotImplemented[(NotImplemented["latin1"] = 1)] = "latin1"
    NotImplemented[(NotImplemented["utf16le"] = 2)] = "utf16le"
})(NotImplemented || (NotImplemented = {}))
function normalizeEncoding2(enc) {
    const encoding = normalizeEncoding(enc ?? null)
    if (encoding && encoding in NotImplemented) notImplemented(encoding)
    if (!encoding && typeof enc === "string" && enc.toLowerCase() !== "raw") {
        throw new Error(`Unknown encoding: ${enc}`)
    }
    return String(encoding)
}
function isBufferType(buf) {
    return buf instanceof ArrayBuffer && buf.BYTES_PER_ELEMENT
}
function utf8CheckByte(__byte) {
    if (__byte <= 0x7f) return 0
    else if (__byte >> 5 === 0x06) return 2
    else if (__byte >> 4 === 0x0e) return 3
    else if (__byte >> 3 === 0x1e) return 4
    return __byte >> 6 === 0x02 ? -1 : -2
}
function utf8CheckIncomplete(self1, buf, i) {
    let j = buf.length - 1
    if (j < i) return 0
    let nb = utf8CheckByte(buf[j])
    if (nb >= 0) {
        if (nb > 0) self1.lastNeed = nb - 1
        return nb
    }
    if (--j < i || nb === -2) return 0
    nb = utf8CheckByte(buf[j])
    if (nb >= 0) {
        if (nb > 0) self1.lastNeed = nb - 2
        return nb
    }
    if (--j < i || nb === -2) return 0
    nb = utf8CheckByte(buf[j])
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0
            else self1.lastNeed = nb - 3
        }
        return nb
    }
    return 0
}
function utf8CheckExtraBytes(self1, buf) {
    if ((buf[0] & 0xc0) !== 0x80) {
        self1.lastNeed = 0
        return "\ufffd"
    }
    if (self1.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xc0) !== 0x80) {
            self1.lastNeed = 1
            return "\ufffd"
        }
        if (self1.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xc0) !== 0x80) {
                self1.lastNeed = 2
                return "\ufffd"
            }
        }
    }
}
function utf8FillLastComplete(buf) {
    const p = this.lastTotal - this.lastNeed
    const r = utf8CheckExtraBytes(this, buf)
    if (r !== undefined) return r
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed)
        return this.lastChar.toString(this.encoding, 0, this.lastTotal)
    }
    buf.copy(this.lastChar, p, 0, buf.length)
    this.lastNeed -= buf.length
}
function utf8FillLastIncomplete(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed)
        return this.lastChar.toString(this.encoding, 0, this.lastTotal)
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length)
    this.lastNeed -= buf.length
}
function utf8Text(buf, i) {
    const total = utf8CheckIncomplete(this, buf, i)
    if (!this.lastNeed) return buf.toString("utf8", i)
    this.lastTotal = total
    const end = buf.length - (total - this.lastNeed)
    buf.copy(this.lastChar, 0, end)
    return buf.toString("utf8", i, end)
}
function utf8End(buf) {
    const r = buf && buf.length ? this.write(buf) : ""
    if (this.lastNeed) return r + "\ufffd"
    return r
}
function utf8Write(buf) {
    if (typeof buf === "string") {
        return buf
    }
    if (buf.length === 0) return ""
    let r
    let i
    const normalizedBuffer = isBufferType(buf) ? buf : Buffer.from(buf)
    if (this.lastNeed) {
        r = this.fillLast(normalizedBuffer)
        if (r === undefined) return ""
        i = this.lastNeed
        this.lastNeed = 0
    } else {
        i = 0
    }
    if (i < buf.length) {
        return r ? r + this.text(normalizedBuffer, i) : this.text(normalizedBuffer, i)
    }
    return r || ""
}
function base64Text(buf, i) {
    const n = (buf.length - i) % 3
    if (n === 0) return buf.toString("base64", i)
    this.lastNeed = 3 - n
    this.lastTotal = 3
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1]
    } else {
        this.lastChar[0] = buf[buf.length - 2]
        this.lastChar[1] = buf[buf.length - 1]
    }
    return buf.toString("base64", i, buf.length - n)
}
function base64End(buf) {
    const r = buf && buf.length ? this.write(buf) : ""
    if (this.lastNeed) {
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
    }
    return r
}
function simpleWrite(buf) {
    if (typeof buf === "string") {
        return buf
    }
    return buf.toString(this.encoding)
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : ""
}
class StringDecoderBase {
    encoding
    lastChar
    lastNeed
    lastTotal
    constructor(encoding, nb) {
        this.encoding = encoding
        this.lastNeed = 0
        this.lastTotal = 0
        this.lastChar = Buffer.allocUnsafe(nb)
    }
}
class Base64Decoder extends StringDecoderBase {
    end = base64End
    fillLast = utf8FillLastIncomplete
    text = base64Text
    write = utf8Write
    constructor(encoding) {
        super(normalizeEncoding2(encoding), 3)
    }
}
class GenericDecoder extends StringDecoderBase {
    end = simpleEnd
    fillLast = undefined
    text = utf8Text
    write = simpleWrite
    constructor(encoding) {
        super(normalizeEncoding2(encoding), 4)
    }
}
class Utf8Decoder extends StringDecoderBase {
    end = utf8End
    fillLast = utf8FillLastComplete
    text = utf8Text
    write = utf8Write
    constructor(encoding) {
        super(normalizeEncoding2(encoding), 4)
    }
}
class StringDecoder {
    encoding
    end
    fillLast
    lastChar
    lastNeed
    lastTotal
    text
    write
    constructor(encoding) {
        const normalizedEncoding = normalizeEncoding2(encoding)
        let decoder
        switch (normalizedEncoding) {
            case "utf8":
                decoder = new Utf8Decoder(encoding)
                break
            case "base64":
                decoder = new Base64Decoder(encoding)
                break
            default:
                decoder = new GenericDecoder(encoding)
        }
        this.encoding = decoder.encoding
        this.end = decoder.end
        this.fillLast = decoder.fillLast
        this.lastChar = decoder.lastChar
        this.lastNeed = decoder.lastNeed
        this.lastTotal = decoder.lastTotal
        this.text = decoder.text
        this.write = decoder.write
    }
}
const PStringDecoder = new Proxy(StringDecoder, {
    apply(_target, thisArg, args) {
        return Object.assign(thisArg, new StringDecoder(...args))
    },
})
const __default4 = {
    StringDecoder: PStringDecoder,
}
const kDestroy = Symbol("kDestroy")
Symbol("kConstruct")
function checkError(err, w, r) {
    if (err) {
        err.stack
        if (w && !w.errored) {
            w.errored = err
        }
        if (r && !r.errored) {
            r.errored = err
        }
    }
}
function destroy(err, cb) {
    const r = this._readableState
    const w = this._writableState
    const s = w || r
    if ((w && w.destroyed) || (r && r.destroyed)) {
        if (typeof cb === "function") {
            cb()
        }
        return this
    }
    checkError(err, w, r)
    if (w) {
        w.destroyed = true
    }
    if (r) {
        r.destroyed = true
    }
    if (!s.constructed) {
        this.once(kDestroy, function (er) {
            _destroy(this, aggregateTwoErrors(er, err), cb)
        })
    } else {
        _destroy(this, err, cb)
    }
    return this
}
function _destroy(self1, err, cb) {
    let called = false
    function onDestroy(err) {
        if (called) {
            return
        }
        called = true
        const r = self1._readableState
        const w = self1._writableState
        checkError(err, w, r)
        if (w) {
            w.closed = true
        }
        if (r) {
            r.closed = true
        }
        if (typeof cb === "function") {
            cb(err)
        }
        if (err) {
            nextTick1(emitErrorCloseNT, self1, err)
        } else {
            nextTick1(emitCloseNT, self1)
        }
    }
    try {
        const result = self1._destroy(err || null, onDestroy)
        if (result != null) {
            const then = result.then
            if (typeof then === "function") {
                then.call(
                    result,
                    function () {
                        nextTick1(onDestroy, null)
                    },
                    function (err) {
                        nextTick1(onDestroy, err)
                    }
                )
            }
        }
    } catch (err) {
        onDestroy(err)
    }
}
function emitErrorCloseNT(self1, err) {
    emitErrorNT(self1, err)
    emitCloseNT(self1)
}
function emitCloseNT(self1) {
    const r = self1._readableState
    const w = self1._writableState
    if (w) {
        w.closeEmitted = true
    }
    if (r) {
        r.closeEmitted = true
    }
    if ((w && w.emitClose) || (r && r.emitClose)) {
        self1.emit("close")
    }
}
function emitErrorNT(self1, err) {
    const r = self1._readableState
    const w = self1._writableState
    if ((w && w.errorEmitted) || (r && r.errorEmitted)) {
        return
    }
    if (w) {
        w.errorEmitted = true
    }
    if (r) {
        r.errorEmitted = true
    }
    self1.emit("error", err)
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function"
}
function isServerResponse(stream) {
    return typeof stream._sent100 === "boolean" && typeof stream._removedConnection === "boolean" && typeof stream._removedContLen === "boolean" && typeof stream._removedTE === "boolean" && typeof stream._closed === "boolean"
}
function isReadable(stream) {
    return typeof stream.readable === "boolean" || typeof stream.readableEnded === "boolean" || !!stream._readableState
}
function isWritable(stream) {
    return typeof stream.writable === "boolean" || typeof stream.writableEnded === "boolean" || !!stream._writableState
}
function isWritableFinished(stream) {
    if (stream.writableFinished) return true
    const wState = stream._writableState
    if (!wState || wState.errored) return false
    return wState.finished || (wState.ended && wState.length === 0)
}
const nop = () => {}
function isReadableEnded(stream) {
    if (stream.readableEnded) return true
    const rState = stream._readableState
    if (!rState || rState.errored) return false
    return rState.endEmitted || (rState.ended && rState.length === 0)
}
function eos(stream, options, callback) {
    if (arguments.length === 2) {
        callback = options
        options = {}
    } else if (options == null) {
        options = {}
    } else {
        validateObject(options, "options")
    }
    validateFunction(callback, "callback")
    validateAbortSignal(options.signal, "options.signal")
    callback = once1(callback)
    const readable = options.readable || (options.readable !== false && isReadable(stream))
    const writable = options.writable || (options.writable !== false && isWritable(stream))
    const wState = stream._writableState
    const rState = stream._readableState
    const state = wState || rState
    const onlegacyfinish = () => {
        if (!stream.writable) onfinish()
    }
    let willEmitClose = isServerResponse(stream) || (state && state.autoDestroy && state.emitClose && state.closed === false && isReadable(stream) === readable && isWritable(stream) === writable)
    let writableFinished = stream.writableFinished || (wState && wState.finished)
    const onfinish = () => {
        writableFinished = true
        if (stream.destroyed) willEmitClose = false
        if (willEmitClose && (!stream.readable || readable)) return
        if (!readable || readableEnded) callback.call(stream)
    }
    let readableEnded = stream.readableEnded || (rState && rState.endEmitted)
    const onend = () => {
        readableEnded = true
        if (stream.destroyed) willEmitClose = false
        if (willEmitClose && (!stream.writable || writable)) return
        if (!writable || writableFinished) callback.call(stream)
    }
    const onerror = (err) => {
        callback.call(stream, err)
    }
    const onclose = () => {
        if (readable && !readableEnded) {
            if (!isReadableEnded(stream)) {
                return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE())
            }
        }
        if (writable && !writableFinished) {
            if (!isWritableFinished(stream)) {
                return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE())
            }
        }
        callback.call(stream)
    }
    const onrequest = () => {
        stream.req.on("finish", onfinish)
    }
    if (isRequest(stream)) {
        stream.on("complete", onfinish)
        if (!willEmitClose) {
            stream.on("abort", onclose)
        }
        if (stream.req) onrequest()
        else stream.on("request", onrequest)
    } else if (writable && !wState) {
        stream.on("end", onlegacyfinish)
        stream.on("close", onlegacyfinish)
    }
    if (!willEmitClose && typeof stream.aborted === "boolean") {
        stream.on("aborted", onclose)
    }
    stream.on("end", onend)
    stream.on("finish", onfinish)
    if (options.error !== false) stream.on("error", onerror)
    stream.on("close", onclose)
    const closed = (!wState && !rState && stream._closed === true) || (wState && wState.closed) || (rState && rState.closed) || (wState && wState.errorEmitted) || (rState && rState.errorEmitted) || (rState && stream.req && stream.aborted) || ((!wState || !willEmitClose || typeof wState.closed !== "boolean") && (!rState || !willEmitClose || typeof rState.closed !== "boolean") && (!writable || (wState && wState.finished)) && (!readable || (rState && rState.endEmitted)))
    if (closed) {
        nextTick1(() => {
            callback()
        })
    }
    const cleanup = () => {
        callback = nop
        stream.removeListener("aborted", onclose)
        stream.removeListener("complete", onfinish)
        stream.removeListener("abort", onclose)
        stream.removeListener("request", onrequest)
        if (stream.req) stream.req.removeListener("finish", onfinish)
        stream.removeListener("end", onlegacyfinish)
        stream.removeListener("close", onlegacyfinish)
        stream.removeListener("finish", onfinish)
        stream.removeListener("end", onend)
        stream.removeListener("error", onerror)
        stream.removeListener("close", onclose)
    }
    if (options.signal && !closed) {
        const abort = () => {
            const endCallback = callback
            cleanup()
            endCallback.call(stream, new AbortError())
        }
        if (options.signal.aborted) {
            nextTick1(abort)
        } else {
            const originalCallback = callback
            callback = once1((...args) => {
                options.signal.removeEventListener("abort", abort)
                originalCallback.apply(stream, args)
            })
            options.signal.addEventListener("abort", abort)
        }
    }
    return cleanup
}
Symbol("kIsDisturbed")
function isReadableNodeStream(obj) {
    return !!(obj && typeof obj.pipe === "function" && typeof obj.on === "function" && (!obj._writableState || obj._readableState?.readable !== false) && (!obj._writableState || obj._readableState))
}
function isWritableNodeStream(obj) {
    return !!(obj && typeof obj.write === "function" && typeof obj.on === "function" && (!obj._readableState || obj._writableState?.writable !== false))
}
function isNodeStream(obj) {
    return obj && (obj._readableState || obj._writableState || (typeof obj.write === "function" && typeof obj.on === "function") || (typeof obj.pipe === "function" && typeof obj.on === "function"))
}
function isDestroyed(stream) {
    if (!isNodeStream(stream)) return null
    const wState = stream._writableState
    const rState = stream._readableState
    const state = wState || rState
    return !!(stream.destroyed || state?.destroyed)
}
function isWritableEnded(stream) {
    if (!isWritableNodeStream(stream)) return null
    if (stream.writableEnded === true) return true
    const wState = stream._writableState
    if (wState?.errored) return false
    if (typeof wState?.ended !== "boolean") return null
    return wState.ended
}
function isReadableEnded1(stream) {
    if (!isReadableNodeStream(stream)) return null
    if (stream.readableEnded === true) return true
    const rState = stream._readableState
    if (!rState || rState.errored) return false
    if (typeof rState?.ended !== "boolean") return null
    return rState.ended
}
function isReadableFinished(stream, strict) {
    if (!isReadableNodeStream(stream)) return null
    const rState = stream._readableState
    if (rState?.errored) return false
    if (typeof rState?.endEmitted !== "boolean") return null
    return !!(rState.endEmitted || (strict === false && rState.ended === true && rState.length === 0))
}
function isReadable1(stream) {
    const r = isReadableNodeStream(stream)
    if (r === null || typeof stream?.readable !== "boolean") return null
    if (isDestroyed(stream)) return false
    return r && stream.readable && !isReadableFinished(stream)
}
function isWritable1(stream) {
    const r = isWritableNodeStream(stream)
    if (r === null || typeof stream?.writable !== "boolean") return null
    if (isDestroyed(stream)) return false
    return r && stream.writable && !isWritableEnded(stream)
}
const __process$ = {
    nextTick: nextTick1,
    stdio,
}
var pi = Object.create
var Bt = Object.defineProperty
var wi = Object.getOwnPropertyDescriptor
var yi = Object.getOwnPropertyNames
var gi = Object.getPrototypeOf,
    Si = Object.prototype.hasOwnProperty
;((e) =>
    typeof require < "u"
        ? require
        : typeof Proxy < "u"
        ? new Proxy(e, {
              get: (t, n) => (typeof require < "u" ? require : t)[n],
          })
        : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + e + '" is not supported')
})
var g = (e, t) => () => (
    t ||
        e(
            (t = {
                exports: {},
            }).exports,
            t
        ),
    t.exports
)
var Ei = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
        for (let i of yi(t))
            !Si.call(e, i) &&
                i !== n &&
                Bt(e, i, {
                    get: () => t[i],
                    enumerable: !(r = wi(t, i)) || r.enumerable,
                })
    return e
}
var Ri = (e, t, n) => (
    (n = e != null ? pi(gi(e)) : {}),
    Ei(
        t || !e || !e.__esModule
            ? Bt(n, "default", {
                  value: e,
                  enumerable: !0,
              })
            : n,
        e
    )
)
var m = g((Yf, Gt) => {
    "use strict"
    Gt.exports = {
        ArrayIsArray(e) {
            return Array.isArray(e)
        },
        ArrayPrototypeIncludes(e, t) {
            return e.includes(t)
        },
        ArrayPrototypeIndexOf(e, t) {
            return e.indexOf(t)
        },
        ArrayPrototypeJoin(e, t) {
            return e.join(t)
        },
        ArrayPrototypeMap(e, t) {
            return e.map(t)
        },
        ArrayPrototypePop(e, t) {
            return e.pop(t)
        },
        ArrayPrototypePush(e, t) {
            return e.push(t)
        },
        ArrayPrototypeSlice(e, t, n) {
            return e.slice(t, n)
        },
        Error,
        FunctionPrototypeCall(e, t, ...n) {
            return e.call(t, ...n)
        },
        FunctionPrototypeSymbolHasInstance(e, t) {
            return Function.prototype[Symbol.hasInstance].call(e, t)
        },
        MathFloor: Math.floor,
        Number,
        NumberIsInteger: Number.isInteger,
        NumberIsNaN: Number.isNaN,
        NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
        NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
        NumberParseInt: Number.parseInt,
        ObjectDefineProperties(e, t) {
            return Object.defineProperties(e, t)
        },
        ObjectDefineProperty(e, t, n) {
            return Object.defineProperty(e, t, n)
        },
        ObjectGetOwnPropertyDescriptor(e, t) {
            return Object.getOwnPropertyDescriptor(e, t)
        },
        ObjectKeys(e) {
            return Object.keys(e)
        },
        ObjectSetPrototypeOf(e, t) {
            return Object.setPrototypeOf(e, t)
        },
        Promise,
        PromisePrototypeCatch(e, t) {
            return e.catch(t)
        },
        PromisePrototypeThen(e, t, n) {
            return e.then(t, n)
        },
        PromiseReject(e) {
            return Promise.reject(e)
        },
        ReflectApply: Reflect.apply,
        RegExpPrototypeTest(e, t) {
            return e.test(t)
        },
        SafeSet: Set,
        String,
        StringPrototypeSlice(e, t, n) {
            return e.slice(t, n)
        },
        StringPrototypeToLowerCase(e) {
            return e.toLowerCase()
        },
        StringPrototypeToUpperCase(e) {
            return e.toUpperCase()
        },
        StringPrototypeTrim(e) {
            return e.trim()
        },
        Symbol,
        SymbolAsyncIterator: Symbol.asyncIterator,
        SymbolHasInstance: Symbol.hasInstance,
        SymbolIterator: Symbol.iterator,
        TypedArrayPrototypeSet(e, t, n) {
            return e.set(t, n)
        },
        Uint8Array,
    }
})
var j = g((Kf, Je) => {
    "use strict"
    var Ai = __default3,
        mi = Object.getPrototypeOf(async function () {}).constructor,
        Ht = globalThis.Blob || Ai.Blob,
        Ti =
            typeof Ht < "u"
                ? function (t) {
                      return t instanceof Ht
                  }
                : function (t) {
                      return !1
                  },
        Xe = class extends Error {
            constructor(t) {
                if (!Array.isArray(t)) throw new TypeError(`Expected input to be an Array, got ${typeof t}`)
                let n = ""
                for (let r = 0; r < t.length; r++)
                    n += `    ${t[r].stack}
`
                super(n), (this.name = "AggregateError"), (this.errors = t)
            }
        }
    Je.exports = {
        AggregateError: Xe,
        kEmptyObject: Object.freeze({}),
        once(e) {
            let t = !1
            return function (...n) {
                t || ((t = !0), e.apply(this, n))
            }
        },
        createDeferredPromise: function () {
            let e, t
            return {
                promise: new Promise((r, i) => {
                    ;(e = r), (t = i)
                }),
                resolve: e,
                reject: t,
            }
        },
        promisify(e) {
            return new Promise((t, n) => {
                e((r, ...i) => (r ? n(r) : t(...i)))
            })
        },
        debuglog() {
            return function () {}
        },
        format(e, ...t) {
            return e.replace(/%([sdifj])/g, function (...[n, r]) {
                let i = t.shift()
                return r === "f" ? i.toFixed(6) : r === "j" ? JSON.stringify(i) : r === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString()
            })
        },
        inspect(e) {
            switch (typeof e) {
                case "string":
                    if (e.includes("'"))
                        if (e.includes('"')) {
                            if (!e.includes("`") && !e.includes("${")) return `\`${e}\``
                        } else return `"${e}"`
                    return `'${e}'`
                case "number":
                    return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e
                case "bigint":
                    return `${String(e)}n`
                case "boolean":
                case "undefined":
                    return String(e)
                case "object":
                    return "{}"
            }
        },
        types: {
            isAsyncFunction(e) {
                return e instanceof mi
            },
            isArrayBufferView(e) {
                return ArrayBuffer.isView(e)
            },
        },
        isBlob: Ti,
    }
    Je.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom")
})
var O = g((zf, Kt) => {
    "use strict"
    var { format: Ii, inspect: Re, AggregateError: Mi } = j(),
        Ni = globalThis.AggregateError || Mi,
        Di = Symbol("kIsNodeError"),
        Oi = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"],
        qi = /^([A-Z][a-z0-9]*)+$/,
        xi = "__node_internal_",
        Ae = {}
    function X(e, t) {
        if (!e) throw new Ae.ERR_INTERNAL_ASSERTION(t)
    }
    function Vt(e) {
        let t = "",
            n = e.length,
            r = e[0] === "-" ? 1 : 0
        for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`
        return `${e.slice(0, n)}${t}`
    }
    function Li(e, t, n) {
        if (typeof t == "function") return X(t.length <= n.length, `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${t.length}).`), t(...n)
        let r = (t.match(/%[dfijoOs]/g) || []).length
        return X(r === n.length, `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${r}).`), n.length === 0 ? t : Ii(t, ...n)
    }
    function N(e, t, n) {
        n || (n = Error)
        class r extends n {
            constructor(...o) {
                super(Li(e, t, o))
            }
            toString() {
                return `${this.name} [${e}]: ${this.message}`
            }
        }
        Object.defineProperties(r.prototype, {
            name: {
                value: n.name,
                writable: !0,
                enumerable: !1,
                configurable: !0,
            },
            toString: {
                value() {
                    return `${this.name} [${e}]: ${this.message}`
                },
                writable: !0,
                enumerable: !1,
                configurable: !0,
            },
        }),
            (r.prototype.code = e),
            (r.prototype[Di] = !0),
            (Ae[e] = r)
    }
    function Yt(e) {
        let t = xi + e.name
        return (
            Object.defineProperty(e, "name", {
                value: t,
            }),
            e
        )
    }
    function Pi(e, t) {
        if (e && t && e !== t) {
            if (Array.isArray(t.errors)) return t.errors.push(e), t
            let n = new Ni([t, e], t.message)
            return (n.code = t.code), n
        }
        return e || t
    }
    var Qe = class extends Error {
        constructor(t = "The operation was aborted", n = void 0) {
            if (n !== void 0 && typeof n != "object") throw new Ae.ERR_INVALID_ARG_TYPE("options", "Object", n)
            super(t, n), (this.code = "ABORT_ERR"), (this.name = "AbortError")
        }
    }
    N("ERR_ASSERTION", "%s", Error)
    N(
        "ERR_INVALID_ARG_TYPE",
        (e, t, n) => {
            X(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t])
            let r = "The "
            e.endsWith(" argument") ? (r += `${e} `) : (r += `"${e}" ${e.includes(".") ? "property" : "argument"} `), (r += "must be ")
            let i = [],
                o = [],
                l = []
            for (let f of t) X(typeof f == "string", "All expected entries have to be of type string"), Oi.includes(f) ? i.push(f.toLowerCase()) : qi.test(f) ? o.push(f) : (X(f !== "object", 'The value "object" should be written as "Object"'), l.push(f))
            if (o.length > 0) {
                let f = i.indexOf("object")
                f !== -1 && (i.splice(i, f, 1), o.push("Object"))
            }
            if (i.length > 0) {
                switch (i.length) {
                    case 1:
                        r += `of type ${i[0]}`
                        break
                    case 2:
                        r += `one of type ${i[0]} or ${i[1]}`
                        break
                    default: {
                        let f = i.pop()
                        r += `one of type ${i.join(", ")}, or ${f}`
                    }
                }
                ;(o.length > 0 || l.length > 0) && (r += " or ")
            }
            if (o.length > 0) {
                switch (o.length) {
                    case 1:
                        r += `an instance of ${o[0]}`
                        break
                    case 2:
                        r += `an instance of ${o[0]} or ${o[1]}`
                        break
                    default: {
                        let f = o.pop()
                        r += `an instance of ${o.join(", ")}, or ${f}`
                    }
                }
                l.length > 0 && (r += " or ")
            }
            switch (l.length) {
                case 0:
                    break
                case 1:
                    l[0].toLowerCase() !== l[0] && (r += "an "), (r += `${l[0]}`)
                    break
                case 2:
                    r += `one of ${l[0]} or ${l[1]}`
                    break
                default: {
                    let f = l.pop()
                    r += `one of ${l.join(", ")}, or ${f}`
                }
            }
            if (n == null) r += `. Received ${n}`
            else if (typeof n == "function" && n.name) r += `. Received function ${n.name}`
            else if (typeof n == "object") {
                var u
                ;(u = n.constructor) !== null && u !== void 0 && u.name
                    ? (r += `. Received an instance of ${n.constructor.name}`)
                    : (r += `. Received ${Re(n, {
                          depth: -1,
                      })}`)
            } else {
                let f = Re(n, {
                    colors: !1,
                })
                f.length > 25 && (f = `${f.slice(0, 25)}...`), (r += `. Received type ${typeof n} (${f})`)
            }
            return r
        },
        TypeError
    )
    N(
        "ERR_INVALID_ARG_VALUE",
        (e, t, n = "is invalid") => {
            let r = Re(t)
            return r.length > 128 && (r = r.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${n}. Received ${r}`
        },
        TypeError
    )
    N(
        "ERR_INVALID_RETURN_VALUE",
        (e, t, n) => {
            var r
            let i = n != null && (r = n.constructor) !== null && r !== void 0 && r.name ? `instance of ${n.constructor.name}` : `type ${typeof n}`
            return `Expected ${e} to be returned from the "${t}" function but got ${i}.`
        },
        TypeError
    )
    N(
        "ERR_MISSING_ARGS",
        (...e) => {
            X(e.length > 0, "At least one arg needs to be specified")
            let t,
                n = e.length
            switch (((e = (Array.isArray(e) ? e : [e]).map((r) => `"${r}"`).join(" or ")), n)) {
                case 1:
                    t += `The ${e[0]} argument`
                    break
                case 2:
                    t += `The ${e[0]} and ${e[1]} arguments`
                    break
                default:
                    {
                        let r = e.pop()
                        t += `The ${e.join(", ")}, and ${r} arguments`
                    }
                    break
            }
            return `${t} must be specified`
        },
        TypeError
    )
    N(
        "ERR_OUT_OF_RANGE",
        (e, t, n) => {
            X(t, 'Missing "range" argument')
            let r
            return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? (r = Vt(String(n))) : typeof n == "bigint" ? ((r = String(n)), (n > 2n ** 32n || n < -(2n ** 32n)) && (r = Vt(r)), (r += "n")) : (r = Re(n)), `The value of "${e}" is out of range. It must be ${t}. Received ${r}`
        },
        RangeError
    )
    N("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error)
    N("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error)
    N("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error)
    N("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error)
    N("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error)
    N("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError)
    N("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error)
    N("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error)
    N("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error)
    N("ERR_STREAM_WRITE_AFTER_END", "write after end", Error)
    N("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError)
    Kt.exports = {
        AbortError: Qe,
        aggregateTwoErrors: Yt(Pi),
        hideStackFrames: Yt,
        codes: Ae,
    }
})
var _e = g((Xf, nn) => {
    "use strict"
    var { ArrayIsArray: Jt, ArrayPrototypeIncludes: Qt, ArrayPrototypeJoin: Zt, ArrayPrototypeMap: ki, NumberIsInteger: et, NumberIsNaN: Wi, NumberMAX_SAFE_INTEGER: Ci, NumberMIN_SAFE_INTEGER: ji, NumberParseInt: $i, ObjectPrototypeHasOwnProperty: vi, RegExpPrototypeExec: Fi, String: Ui, StringPrototypeToUpperCase: Bi, StringPrototypeTrim: Gi } = m(),
        {
            hideStackFrames: k,
            codes: { ERR_SOCKET_BAD_PORT: Hi, ERR_INVALID_ARG_TYPE: q, ERR_INVALID_ARG_VALUE: me, ERR_OUT_OF_RANGE: J, ERR_UNKNOWN_SIGNAL: zt },
        } = O(),
        { normalizeEncoding: Vi } = j(),
        { isAsyncFunction: Yi, isArrayBufferView: Ki } = j().types,
        Xt = {}
    function zi(e) {
        return e === (e | 0)
    }
    function Xi(e) {
        return e === e >>> 0
    }
    var Ji = /^[0-7]+$/,
        Qi = "must be a 32-bit unsigned integer or an octal string"
    function Zi(e, t, n) {
        if ((typeof e > "u" && (e = n), typeof e == "string")) {
            if (Fi(Ji, e) === null) throw new me(t, e, Qi)
            e = $i(e, 8)
        }
        return en(e, t), e
    }
    var eo = k((e, t, n = ji, r = Ci) => {
            if (typeof e != "number") throw new q(t, "number", e)
            if (!et(e)) throw new J(t, "an integer", e)
            if (e < n || e > r) throw new J(t, `>= ${n} && <= ${r}`, e)
        }),
        to = k((e, t, n = -2147483648, r = 2147483647) => {
            if (typeof e != "number") throw new q(t, "number", e)
            if (!et(e)) throw new J(t, "an integer", e)
            if (e < n || e > r) throw new J(t, `>= ${n} && <= ${r}`, e)
        }),
        en = k((e, t, n = !1) => {
            if (typeof e != "number") throw new q(t, "number", e)
            if (!et(e)) throw new J(t, "an integer", e)
            let r = n ? 1 : 0,
                i = 4294967295
            if (e < r || e > i) throw new J(t, `>= ${r} && <= ${i}`, e)
        })
    function tn(e, t) {
        if (typeof e != "string") throw new q(t, "string", e)
    }
    function no(e, t, n = void 0, r) {
        if (typeof e != "number") throw new q(t, "number", e)
        if ((n != null && e < n) || (r != null && e > r) || ((n != null || r != null) && Wi(e))) throw new J(t, `${n != null ? `>= ${n}` : ""}${n != null && r != null ? " && " : ""}${r != null ? `<= ${r}` : ""}`, e)
    }
    var ro = k((e, t, n) => {
        if (!Qt(n, e)) {
            let r = Zt(
                    ki(n, (o) => (typeof o == "string" ? `'${o}'` : Ui(o))),
                    ", "
                ),
                i = "must be one of: " + r
            throw new me(t, e, i)
        }
    })
    function io(e, t) {
        if (typeof e != "boolean") throw new q(t, "boolean", e)
    }
    function Ze(e, t, n) {
        return e == null || !vi(e, t) ? n : e[t]
    }
    var oo = k((e, t, n = null) => {
            let r = Ze(n, "allowArray", !1),
                i = Ze(n, "allowFunction", !1)
            if ((!Ze(n, "nullable", !1) && e === null) || (!r && Jt(e)) || (typeof e != "object" && (!i || typeof e != "function"))) throw new q(t, "Object", e)
        }),
        lo = k((e, t, n = 0) => {
            if (!Jt(e)) throw new q(t, "Array", e)
            if (e.length < n) {
                let r = `must be longer than ${n}`
                throw new me(t, e, r)
            }
        })
    function ao(e, t = "signal") {
        if ((tn(e, t), Xt[e] === void 0)) throw Xt[Bi(e)] !== void 0 ? new zt(e + " (signals must use all capital letters)") : new zt(e)
    }
    var fo = k((e, t = "buffer") => {
        if (!Ki(e)) throw new q(t, ["Buffer", "TypedArray", "DataView"], e)
    })
    function uo(e, t) {
        let n = Vi(t),
            r = e.length
        if (n === "hex" && r % 2 !== 0) throw new me("encoding", t, `is invalid for data of length ${r}`)
    }
    function so(e, t = "Port", n = !0) {
        if ((typeof e != "number" && typeof e != "string") || (typeof e == "string" && Gi(e).length === 0) || +e !== +e >>> 0 || e > 65535 || (e === 0 && !n)) throw new Hi(t, e, n)
        return e | 0
    }
    var co = k((e, t) => {
            if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e))) throw new q(t, "AbortSignal", e)
        }),
        ho = k((e, t) => {
            if (typeof e != "function") throw new q(t, "Function", e)
        }),
        bo = k((e, t) => {
            if (typeof e != "function" || Yi(e)) throw new q(t, "Function", e)
        }),
        _o = k((e, t) => {
            if (e !== void 0) throw new q(t, "undefined", e)
        })
    function po(e, t, n) {
        if (!Qt(n, e)) throw new q(t, `('${Zt(n, "|")}')`, e)
    }
    nn.exports = {
        isInt32: zi,
        isUint32: Xi,
        parseFileMode: Zi,
        validateArray: lo,
        validateBoolean: io,
        validateBuffer: fo,
        validateEncoding: uo,
        validateFunction: ho,
        validateInt32: to,
        validateInteger: eo,
        validateNumber: no,
        validateObject: oo,
        validateOneOf: ro,
        validatePlainFunction: bo,
        validatePort: so,
        validateSignalName: ao,
        validateString: tn,
        validateUint32: en,
        validateUndefined: _o,
        validateUnion: po,
        validateAbortSignal: co,
    }
})
var V = g((Jf, _n) => {
    "use strict"
    var { Symbol: Te, SymbolAsyncIterator: rn, SymbolIterator: on } = m(),
        ln = Te("kDestroyed"),
        an = Te("kIsErrored"),
        tt = Te("kIsReadable"),
        fn = Te("kIsDisturbed")
    function Ie(e, t = !1) {
        var n
        return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || (typeof e.pause == "function" && typeof e.resume == "function")) && (!e._writableState || ((n = e._readableState) === null || n === void 0 ? void 0 : n.readable) !== !1) && (!e._writableState || e._readableState))
    }
    function Me(e) {
        var t
        return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1))
    }
    function wo(e) {
        return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function")
    }
    function Q(e) {
        return e && (e._readableState || e._writableState || (typeof e.write == "function" && typeof e.on == "function") || (typeof e.pipe == "function" && typeof e.on == "function"))
    }
    function yo(e, t) {
        return e == null ? !1 : t === !0 ? typeof e[rn] == "function" : t === !1 ? typeof e[on] == "function" : typeof e[rn] == "function" || typeof e[on] == "function"
    }
    function Ne(e) {
        if (!Q(e)) return null
        let t = e._writableState,
            n = e._readableState,
            r = t || n
        return !!(e.destroyed || e[ln] || (r != null && r.destroyed))
    }
    function un(e) {
        if (!Me(e)) return null
        if (e.writableEnded === !0) return !0
        let t = e._writableState
        return t != null && t.errored ? !1 : typeof t?.ended != "boolean" ? null : t.ended
    }
    function go(e, t) {
        if (!Me(e)) return null
        if (e.writableFinished === !0) return !0
        let n = e._writableState
        return n != null && n.errored ? !1 : typeof n?.finished != "boolean" ? null : !!(n.finished || (t === !1 && n.ended === !0 && n.length === 0))
    }
    function So(e) {
        if (!Ie(e)) return null
        if (e.readableEnded === !0) return !0
        let t = e._readableState
        return !t || t.errored ? !1 : typeof t?.ended != "boolean" ? null : t.ended
    }
    function sn(e, t) {
        if (!Ie(e)) return null
        let n = e._readableState
        return n != null && n.errored ? !1 : typeof n?.endEmitted != "boolean" ? null : !!(n.endEmitted || (t === !1 && n.ended === !0 && n.length === 0))
    }
    function dn(e) {
        return e && e[tt] != null ? e[tt] : typeof e?.readable != "boolean" ? null : Ne(e) ? !1 : Ie(e) && e.readable && !sn(e)
    }
    function cn(e) {
        return typeof e?.writable != "boolean" ? null : Ne(e) ? !1 : Me(e) && e.writable && !un(e)
    }
    function Eo(e, t) {
        return Q(e) ? (Ne(e) ? !0 : !((t?.readable !== !1 && dn(e)) || (t?.writable !== !1 && cn(e)))) : null
    }
    function Ro(e) {
        var t, n
        return Q(e) ? (e.writableErrored ? e.writableErrored : (t = (n = e._writableState) === null || n === void 0 ? void 0 : n.errored) !== null && t !== void 0 ? t : null) : null
    }
    function Ao(e) {
        var t, n
        return Q(e) ? (e.readableErrored ? e.readableErrored : (t = (n = e._readableState) === null || n === void 0 ? void 0 : n.errored) !== null && t !== void 0 ? t : null) : null
    }
    function mo(e) {
        if (!Q(e)) return null
        if (typeof e.closed == "boolean") return e.closed
        let t = e._writableState,
            n = e._readableState
        return typeof t?.closed == "boolean" || typeof n?.closed == "boolean" ? t?.closed || n?.closed : typeof e._closed == "boolean" && hn(e) ? e._closed : null
    }
    function hn(e) {
        return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean"
    }
    function bn(e) {
        return typeof e._sent100 == "boolean" && hn(e)
    }
    function To(e) {
        var t
        return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0
    }
    function Io(e) {
        if (!Q(e)) return null
        let t = e._writableState,
            n = e._readableState,
            r = t || n
        return (!r && bn(e)) || !!(r && r.autoDestroy && r.emitClose && r.closed === !1)
    }
    function Mo(e) {
        var t
        return !!(e && ((t = e[fn]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted))
    }
    function No(e) {
        var t, n, r, i, o, l, u, f, a, c
        return !!(e && ((t = (n = (r = (i = (o = (l = e[an]) !== null && l !== void 0 ? l : e.readableErrored) !== null && o !== void 0 ? o : e.writableErrored) !== null && i !== void 0 ? i : (u = e._readableState) === null || u === void 0 ? void 0 : u.errorEmitted) !== null && r !== void 0 ? r : (f = e._writableState) === null || f === void 0 ? void 0 : f.errorEmitted) !== null && n !== void 0 ? n : (a = e._readableState) === null || a === void 0 ? void 0 : a.errored) !== null && t !== void 0 ? t : (c = e._writableState) === null || c === void 0 ? void 0 : c.errored))
    }
    _n.exports = {
        kDestroyed: ln,
        isDisturbed: Mo,
        kIsDisturbed: fn,
        isErrored: No,
        kIsErrored: an,
        isReadable: dn,
        kIsReadable: tt,
        isClosed: mo,
        isDestroyed: Ne,
        isDuplexNodeStream: wo,
        isFinished: Eo,
        isIterable: yo,
        isReadableNodeStream: Ie,
        isReadableEnded: So,
        isReadableFinished: sn,
        isReadableErrored: Ao,
        isNodeStream: Q,
        isWritable: cn,
        isWritableNodeStream: Me,
        isWritableEnded: un,
        isWritableFinished: go,
        isWritableErrored: Ro,
        isServerRequest: To,
        isServerResponse: bn,
        willEmitClose: Io,
    }
})
var Y = g((Qf, rt) => {
    var oe = __process$,
        { AbortError: Do, codes: Oo } = O(),
        { ERR_INVALID_ARG_TYPE: qo, ERR_STREAM_PREMATURE_CLOSE: pn } = Oo,
        { kEmptyObject: wn, once: yn } = j(),
        { validateAbortSignal: xo, validateFunction: Lo, validateObject: Po } = _e(),
        { Promise: ko } = m(),
        { isClosed: Wo, isReadable: gn, isReadableNodeStream: nt, isReadableFinished: Sn, isReadableErrored: Co, isWritable: En, isWritableNodeStream: Rn, isWritableFinished: An, isWritableErrored: jo, isNodeStream: $o, willEmitClose: vo } = V()
    function Fo(e) {
        return e.setHeader && typeof e.abort == "function"
    }
    var Uo = () => {}
    function mn(e, t, n) {
        var r, i
        arguments.length === 2 ? ((n = t), (t = wn)) : t == null ? (t = wn) : Po(t, "options"), Lo(n, "callback"), xo(t.signal, "options.signal"), (n = yn(n))
        let o = (r = t.readable) !== null && r !== void 0 ? r : nt(e),
            l = (i = t.writable) !== null && i !== void 0 ? i : Rn(e)
        if (!$o(e)) throw new qo("stream", "Stream", e)
        let u = e._writableState,
            f = e._readableState,
            a = () => {
                e.writable || b()
            },
            c = vo(e) && nt(e) === o && Rn(e) === l,
            s = An(e, !1),
            b = () => {
                ;(s = !0), e.destroyed && (c = !1), !(c && (!e.readable || o)) && (!o || d) && n.call(e)
            },
            d = Sn(e, !1),
            h = () => {
                ;(d = !0), e.destroyed && (c = !1), !(c && (!e.writable || l)) && (!l || s) && n.call(e)
            },
            D = (M) => {
                n.call(e, M)
            },
            L = Wo(e),
            _ = () => {
                L = !0
                let M = jo(e) || Co(e)
                if (M && typeof M != "boolean") return n.call(e, M)
                if (o && !d && nt(e, !0) && !Sn(e, !1)) return n.call(e, new pn())
                if (l && !s && !An(e, !1)) return n.call(e, new pn())
                n.call(e)
            },
            p = () => {
                e.req.on("finish", b)
            }
        Fo(e) ? (e.on("complete", b), c || e.on("abort", _), e.req ? p() : e.on("request", p)) : l && !u && (e.on("end", a), e.on("close", a)), !c && typeof e.aborted == "boolean" && e.on("aborted", _), e.on("end", h), e.on("finish", b), t.error !== !1 && e.on("error", D), e.on("close", _), L ? oe.nextTick(_) : (u != null && u.errorEmitted) || (f != null && f.errorEmitted) ? c || oe.nextTick(_) : ((!o && (!c || gn(e)) && (s || En(e) === !1)) || (!l && (!c || En(e)) && (d || gn(e) === !1)) || (f && e.req && e.aborted)) && oe.nextTick(_)
        let I = () => {
            ;(n = Uo), e.removeListener("aborted", _), e.removeListener("complete", b), e.removeListener("abort", _), e.removeListener("request", p), e.req && e.req.removeListener("finish", b), e.removeListener("end", a), e.removeListener("close", a), e.removeListener("finish", b), e.removeListener("end", h), e.removeListener("error", D), e.removeListener("close", _)
        }
        if (t.signal && !L) {
            let M = () => {
                let F = n
                I(),
                    F.call(
                        e,
                        new Do(void 0, {
                            cause: t.signal.reason,
                        })
                    )
            }
            if (t.signal.aborted) oe.nextTick(M)
            else {
                let F = n
                ;(n = yn((...re) => {
                    t.signal.removeEventListener("abort", M), F.apply(e, re)
                })),
                    t.signal.addEventListener("abort", M)
            }
        }
        return I
    }
    function Bo(e, t) {
        return new ko((n, r) => {
            mn(e, t, (i) => {
                i ? r(i) : n()
            })
        })
    }
    rt.exports = mn
    rt.exports.finished = Bo
})
var xn = g((Zf, lt) => {
    "use strict"
    var Nn = globalThis.AbortController,
        {
            codes: { ERR_INVALID_ARG_TYPE: pe, ERR_MISSING_ARGS: Go, ERR_OUT_OF_RANGE: Ho },
            AbortError: $,
        } = O(),
        { validateAbortSignal: le, validateInteger: Vo, validateObject: ae } = _e(),
        Yo = m().Symbol("kWeak"),
        { finished: Ko } = Y(),
        { ArrayPrototypePush: zo, MathFloor: Xo, Number: Jo, NumberIsNaN: Qo, Promise: Tn, PromiseReject: In, PromisePrototypeThen: Zo, Symbol: Dn } = m(),
        De = Dn("kEmpty"),
        Mn = Dn("kEof")
    function Oe(e, t) {
        if (typeof e != "function") throw new pe("fn", ["Function", "AsyncFunction"], e)
        t != null && ae(t, "options"), t?.signal != null && le(t.signal, "options.signal")
        let n = 1
        return (
            t?.concurrency != null && (n = Xo(t.concurrency)),
            Vo(n, "concurrency", 1),
            async function* () {
                var i, o
                let l = new Nn(),
                    u = this,
                    f = [],
                    a = l.signal,
                    c = {
                        signal: a,
                    },
                    s = () => l.abort()
                t != null && (i = t.signal) !== null && i !== void 0 && i.aborted && s(), t == null || (o = t.signal) === null || o === void 0 || o.addEventListener("abort", s)
                let b,
                    d,
                    h = !1
                function D() {
                    h = !0
                }
                async function L() {
                    try {
                        for await (let I of u) {
                            var _
                            if (h) return
                            if (a.aborted) throw new $()
                            try {
                                I = e(I, c)
                            } catch (M) {
                                I = In(M)
                            }
                            I !== De &&
                                (typeof ((_ = I) === null || _ === void 0 ? void 0 : _.catch) == "function" && I.catch(D),
                                f.push(I),
                                b && (b(), (b = null)),
                                !h &&
                                    f.length &&
                                    f.length >= n &&
                                    (await new Tn((M) => {
                                        d = M
                                    })))
                        }
                        f.push(Mn)
                    } catch (I) {
                        let M = In(I)
                        Zo(M, void 0, D), f.push(M)
                    } finally {
                        var p
                        ;(h = !0), b && (b(), (b = null)), t == null || (p = t.signal) === null || p === void 0 || p.removeEventListener("abort", s)
                    }
                }
                L()
                try {
                    for (;;) {
                        for (; f.length > 0; ) {
                            let _ = await f[0]
                            if (_ === Mn) return
                            if (a.aborted) throw new $()
                            _ !== De && (yield _), f.shift(), d && (d(), (d = null))
                        }
                        await new Tn((_) => {
                            b = _
                        })
                    }
                } finally {
                    l.abort(), (h = !0), d && (d(), (d = null))
                }
            }.call(this)
        )
    }
    function el(e = void 0) {
        return (
            e != null && ae(e, "options"),
            e?.signal != null && le(e.signal, "options.signal"),
            async function* () {
                let n = 0
                for await (let i of this) {
                    var r
                    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
                        throw new $({
                            cause: e.signal.reason,
                        })
                    yield [n++, i]
                }
            }.call(this)
        )
    }
    async function On(e, t = void 0) {
        for await (let n of ot.call(this, e, t)) return !0
        return !1
    }
    async function tl(e, t = void 0) {
        if (typeof e != "function") throw new pe("fn", ["Function", "AsyncFunction"], e)
        return !(await On.call(this, async (...n) => !(await e(...n)), t))
    }
    async function nl(e, t) {
        for await (let n of ot.call(this, e, t)) return n
    }
    async function rl(e, t) {
        if (typeof e != "function") throw new pe("fn", ["Function", "AsyncFunction"], e)
        async function n(r, i) {
            return await e(r, i), De
        }
        for await (let r of Oe.call(this, n, t));
    }
    function ot(e, t) {
        if (typeof e != "function") throw new pe("fn", ["Function", "AsyncFunction"], e)
        async function n(r, i) {
            return (await e(r, i)) ? r : De
        }
        return Oe.call(this, n, t)
    }
    var it = class extends Go {
        constructor() {
            super("reduce"), (this.message = "Reduce of an empty stream requires an initial value")
        }
    }
    async function il(e, t, n) {
        var r
        if (typeof e != "function") throw new pe("reducer", ["Function", "AsyncFunction"], e)
        n != null && ae(n, "options"), n?.signal != null && le(n.signal, "options.signal")
        let i = arguments.length > 1
        if (n != null && (r = n.signal) !== null && r !== void 0 && r.aborted) {
            let a = new $(void 0, {
                cause: n.signal.reason,
            })
            throw (this.once("error", () => {}), await Ko(this.destroy(a)), a)
        }
        let o = new Nn(),
            l = o.signal
        if (n != null && n.signal) {
            let a = {
                once: !0,
                [Yo]: this,
            }
            n.signal.addEventListener("abort", () => o.abort(), a)
        }
        let u = !1
        try {
            for await (let a of this) {
                var f
                if (((u = !0), n != null && (f = n.signal) !== null && f !== void 0 && f.aborted)) throw new $()
                i
                    ? (t = await e(t, a, {
                          signal: l,
                      }))
                    : ((t = a), (i = !0))
            }
            if (!u && !i) throw new it()
        } finally {
            o.abort()
        }
        return t
    }
    async function ol(e) {
        e != null && ae(e, "options"), e?.signal != null && le(e.signal, "options.signal")
        let t = []
        for await (let r of this) {
            var n
            if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
                throw new $(void 0, {
                    cause: e.signal.reason,
                })
            zo(t, r)
        }
        return t
    }
    function ll(e, t) {
        let n = Oe.call(this, e, t)
        return async function* () {
            for await (let i of n) yield* i
        }.call(this)
    }
    function qn(e) {
        if (((e = Jo(e)), Qo(e))) return 0
        if (e < 0) throw new Ho("number", ">= 0", e)
        return e
    }
    function al(e, t = void 0) {
        return (
            t != null && ae(t, "options"),
            t?.signal != null && le(t.signal, "options.signal"),
            (e = qn(e)),
            async function* () {
                var r
                if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted) throw new $()
                for await (let o of this) {
                    var i
                    if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted) throw new $()
                    e-- <= 0 && (yield o)
                }
            }.call(this)
        )
    }
    function fl(e, t = void 0) {
        return (
            t != null && ae(t, "options"),
            t?.signal != null && le(t.signal, "options.signal"),
            (e = qn(e)),
            async function* () {
                var r
                if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted) throw new $()
                for await (let o of this) {
                    var i
                    if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted) throw new $()
                    if (e-- > 0) yield o
                    else return
                }
            }.call(this)
        )
    }
    lt.exports.streamReturningOperators = {
        asIndexedPairs: el,
        drop: al,
        filter: ot,
        flatMap: ll,
        map: Oe,
        take: fl,
    }
    lt.exports.promiseReturningOperators = {
        every: tl,
        forEach: rl,
        reduce: il,
        toArray: ol,
        some: On,
        find: nl,
    }
})
var Z = g((eu, vn) => {
    "use strict"
    var K = __process$,
        {
            aggregateTwoErrors: ul,
            codes: { ERR_MULTIPLE_CALLBACK: sl },
            AbortError: dl,
        } = O(),
        { Symbol: kn } = m(),
        { kDestroyed: cl, isDestroyed: hl, isFinished: bl, isServerRequest: _l } = V(),
        Wn = kn("kDestroy"),
        at = kn("kConstruct")
    function Cn(e, t, n) {
        e && (e.stack, t && !t.errored && (t.errored = e), n && !n.errored && (n.errored = e))
    }
    function pl(e, t) {
        let n = this._readableState,
            r = this._writableState,
            i = r || n
        return (r && r.destroyed) || (n && n.destroyed)
            ? (typeof t == "function" && t(), this)
            : (Cn(e, r, n),
              r && (r.destroyed = !0),
              n && (n.destroyed = !0),
              i.constructed
                  ? Ln(this, e, t)
                  : this.once(Wn, function (o) {
                        Ln(this, ul(o, e), t)
                    }),
              this)
    }
    function Ln(e, t, n) {
        let r = !1
        function i(o) {
            if (r) return
            r = !0
            let l = e._readableState,
                u = e._writableState
            Cn(o, u, l), u && (u.closed = !0), l && (l.closed = !0), typeof n == "function" && n(o), o ? K.nextTick(wl, e, o) : K.nextTick(jn, e)
        }
        try {
            e._destroy(t || null, i)
        } catch (o) {
            i(o)
        }
    }
    function wl(e, t) {
        ft(e, t), jn(e)
    }
    function jn(e) {
        let t = e._readableState,
            n = e._writableState
        n && (n.closeEmitted = !0), t && (t.closeEmitted = !0), ((n && n.emitClose) || (t && t.emitClose)) && e.emit("close")
    }
    function ft(e, t) {
        let n = e._readableState,
            r = e._writableState
        ;(r && r.errorEmitted) || (n && n.errorEmitted) || (r && (r.errorEmitted = !0), n && (n.errorEmitted = !0), e.emit("error", t))
    }
    function yl() {
        let e = this._readableState,
            t = this._writableState
        e && ((e.constructed = !0), (e.closed = !1), (e.closeEmitted = !1), (e.destroyed = !1), (e.errored = null), (e.errorEmitted = !1), (e.reading = !1), (e.ended = e.readable === !1), (e.endEmitted = e.readable === !1)), t && ((t.constructed = !0), (t.destroyed = !1), (t.closed = !1), (t.closeEmitted = !1), (t.errored = null), (t.errorEmitted = !1), (t.finalCalled = !1), (t.prefinished = !1), (t.ended = t.writable === !1), (t.ending = t.writable === !1), (t.finished = t.writable === !1))
    }
    function ut(e, t, n) {
        let r = e._readableState,
            i = e._writableState
        if ((i && i.destroyed) || (r && r.destroyed)) return this
        ;(r && r.autoDestroy) || (i && i.autoDestroy) ? e.destroy(t) : t && (t.stack, i && !i.errored && (i.errored = t), r && !r.errored && (r.errored = t), n ? K.nextTick(ft, e, t) : ft(e, t))
    }
    function gl(e, t) {
        if (typeof e._construct != "function") return
        let n = e._readableState,
            r = e._writableState
        n && (n.constructed = !1), r && (r.constructed = !1), e.once(at, t), !(e.listenerCount(at) > 1) && K.nextTick(Sl, e)
    }
    function Sl(e) {
        let t = !1
        function n(r) {
            if (t) {
                ut(e, r ?? new sl())
                return
            }
            t = !0
            let i = e._readableState,
                o = e._writableState,
                l = o || i
            i && (i.constructed = !0), o && (o.constructed = !0), l.destroyed ? e.emit(Wn, r) : r ? ut(e, r, !0) : K.nextTick(El, e)
        }
        try {
            e._construct(n)
        } catch (r) {
            n(r)
        }
    }
    function El(e) {
        e.emit(at)
    }
    function Pn(e) {
        return e && e.setHeader && typeof e.abort == "function"
    }
    function $n(e) {
        e.emit("close")
    }
    function Rl(e, t) {
        e.emit("error", t), K.nextTick($n, e)
    }
    function Al(e, t) {
        !e || hl(e) || (!t && !bl(e) && (t = new dl()), _l(e) ? ((e.socket = null), e.destroy(t)) : Pn(e) ? e.abort() : Pn(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? K.nextTick(Rl, e, t) : K.nextTick($n, e), e.destroyed || (e[cl] = !0))
    }
    vn.exports = {
        construct: gl,
        destroyer: Al,
        destroy: pl,
        undestroy: yl,
        errorOrDestroy: ut,
    }
})
var Le = g((tu, Un) => {
    "use strict"
    var { ArrayIsArray: ml, ObjectSetPrototypeOf: Fn } = m(),
        { EventEmitter: qe } = EventEmitter
    function xe(e) {
        qe.call(this, e)
    }
    Fn(xe.prototype, qe.prototype)
    Fn(xe, qe)
    xe.prototype.pipe = function (e, t) {
        let n = this
        function r(c) {
            e.writable && e.write(c) === !1 && n.pause && n.pause()
        }
        n.on("data", r)
        function i() {
            n.readable && n.resume && n.resume()
        }
        e.on("drain", i), !e._isStdio && (!t || t.end !== !1) && (n.on("end", l), n.on("close", u))
        let o = !1
        function l() {
            o || ((o = !0), e.end())
        }
        function u() {
            o || ((o = !0), typeof e.destroy == "function" && e.destroy())
        }
        function f(c) {
            a(), qe.listenerCount(this, "error") === 0 && this.emit("error", c)
        }
        st(n, "error", f), st(e, "error", f)
        function a() {
            n.removeListener("data", r), e.removeListener("drain", i), n.removeListener("end", l), n.removeListener("close", u), n.removeListener("error", f), e.removeListener("error", f), n.removeListener("end", a), n.removeListener("close", a), e.removeListener("close", a)
        }
        return n.on("end", a), n.on("close", a), e.on("close", a), e.emit("pipe", n), e
    }
    function st(e, t, n) {
        if (typeof e.prependListener == "function") return e.prependListener(t, n)
        !e._events || !e._events[t] ? e.on(t, n) : ml(e._events[t]) ? e._events[t].unshift(n) : (e._events[t] = [n, e._events[t]])
    }
    Un.exports = {
        Stream: xe,
        prependListener: st,
    }
})
var ke = g((nu, Pe) => {
    "use strict"
    var { AbortError: Tl, codes: Il } = O(),
        Ml = Y(),
        { ERR_INVALID_ARG_TYPE: Bn } = Il,
        Nl = (e, t) => {
            if (typeof e != "object" || !("aborted" in e)) throw new Bn(t, "AbortSignal", e)
        }
    function Dl(e) {
        return !!(e && typeof e.pipe == "function")
    }
    Pe.exports.addAbortSignal = function (t, n) {
        if ((Nl(t, "signal"), !Dl(n))) throw new Bn("stream", "stream.Stream", n)
        return Pe.exports.addAbortSignalNoValidate(t, n)
    }
    Pe.exports.addAbortSignalNoValidate = function (e, t) {
        if (typeof e != "object" || !("aborted" in e)) return t
        let n = () => {
            t.destroy(
                new Tl(void 0, {
                    cause: e.reason,
                })
            )
        }
        return e.aborted ? n() : (e.addEventListener("abort", n), Ml(t, () => e.removeEventListener("abort", n))), t
    }
})
var Vn = g((iu, Hn) => {
    "use strict"
    var { StringPrototypeSlice: Gn, SymbolIterator: Ol, TypedArrayPrototypeSet: We, Uint8Array: ql } = m(),
        { Buffer: dt } = __default3,
        { inspect: xl } = j()
    Hn.exports = class {
        constructor() {
            ;(this.head = null), (this.tail = null), (this.length = 0)
        }
        push(t) {
            let n = {
                data: t,
                next: null,
            }
            this.length > 0 ? (this.tail.next = n) : (this.head = n), (this.tail = n), ++this.length
        }
        unshift(t) {
            let n = {
                data: t,
                next: this.head,
            }
            this.length === 0 && (this.tail = n), (this.head = n), ++this.length
        }
        shift() {
            if (this.length === 0) return
            let t = this.head.data
            return this.length === 1 ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, t
        }
        clear() {
            ;(this.head = this.tail = null), (this.length = 0)
        }
        join(t) {
            if (this.length === 0) return ""
            let n = this.head,
                r = "" + n.data
            for (; (n = n.next) !== null; ) r += t + n.data
            return r
        }
        concat(t) {
            if (this.length === 0) return dt.alloc(0)
            let n = dt.allocUnsafe(t >>> 0),
                r = this.head,
                i = 0
            for (; r; ) We(n, r.data, i), (i += r.data.length), (r = r.next)
            return n
        }
        consume(t, n) {
            let r = this.head.data
            if (t < r.length) {
                let i = r.slice(0, t)
                return (this.head.data = r.slice(t)), i
            }
            return t === r.length ? this.shift() : n ? this._getString(t) : this._getBuffer(t)
        }
        first() {
            return this.head.data
        }
        *[Ol]() {
            for (let t = this.head; t; t = t.next) yield t.data
        }
        _getString(t) {
            let n = "",
                r = this.head,
                i = 0
            do {
                let o = r.data
                if (t > o.length) (n += o), (t -= o.length)
                else {
                    t === o.length ? ((n += o), ++i, r.next ? (this.head = r.next) : (this.head = this.tail = null)) : ((n += Gn(o, 0, t)), (this.head = r), (r.data = Gn(o, t)))
                    break
                }
                ++i
            } while ((r = r.next) !== null)
            return (this.length -= i), n
        }
        _getBuffer(t) {
            let n = dt.allocUnsafe(t),
                r = t,
                i = this.head,
                o = 0
            do {
                let l = i.data
                if (t > l.length) We(n, l, r - t), (t -= l.length)
                else {
                    t === l.length ? (We(n, l, r - t), ++o, i.next ? (this.head = i.next) : (this.head = this.tail = null)) : (We(n, new ql(l.buffer, l.byteOffset, t), r - t), (this.head = i), (i.data = l.slice(t)))
                    break
                }
                ++o
            } while ((i = i.next) !== null)
            return (this.length -= o), n
        }
        [Symbol.for("nodejs.util.inspect.custom")](t, n) {
            return xl(this, {
                ...n,
                depth: 0,
                customInspect: !1,
            })
        }
    }
})
var Ce = g((ou, Kn) => {
    "use strict"
    var { MathFloor: Ll, NumberIsInteger: Pl } = m(),
        { ERR_INVALID_ARG_VALUE: kl } = O().codes
    function Wl(e, t, n) {
        return e.highWaterMark != null ? e.highWaterMark : t ? e[n] : null
    }
    function Yn(e) {
        return e ? 16 : 16 * 1024
    }
    function Cl(e, t, n, r) {
        let i = Wl(t, r, n)
        if (i != null) {
            if (!Pl(i) || i < 0) {
                let o = r ? `options.${n}` : "options.highWaterMark"
                throw new kl(o, i)
            }
            return Ll(i)
        }
        return Yn(e.objectMode)
    }
    Kn.exports = {
        getHighWaterMark: Cl,
        getDefaultHighWaterMark: Yn,
    }
})
var ct = g((lu, Qn) => {
    "use strict"
    var zn = __process$,
        { PromisePrototypeThen: jl, SymbolAsyncIterator: Xn, SymbolIterator: Jn } = m(),
        { Buffer: $l } = __default3,
        { ERR_INVALID_ARG_TYPE: vl, ERR_STREAM_NULL_VALUES: Fl } = O().codes
    function Ul(e, t, n) {
        let r
        if (typeof t == "string" || t instanceof $l)
            return new e({
                objectMode: !0,
                ...n,
                read() {
                    this.push(t), this.push(null)
                },
            })
        let i
        if (t && t[Xn]) (i = !0), (r = t[Xn]())
        else if (t && t[Jn]) (i = !1), (r = t[Jn]())
        else throw new vl("iterable", ["Iterable"], t)
        let o = new e({
                objectMode: !0,
                highWaterMark: 1,
                ...n,
            }),
            l = !1
        ;(o._read = function () {
            l || ((l = !0), f())
        }),
            (o._destroy = function (a, c) {
                jl(
                    u(a),
                    () => zn.nextTick(c, a),
                    (s) => zn.nextTick(c, s || a)
                )
            })
        async function u(a) {
            let c = a != null,
                s = typeof r.throw == "function"
            if (c && s) {
                let { value: b, done: d } = await r.throw(a)
                if ((await b, d)) return
            }
            if (typeof r.return == "function") {
                let { value: b } = await r.return()
                await b
            }
        }
        async function f() {
            for (;;) {
                try {
                    let { value: a, done: c } = i ? await r.next() : r.next()
                    if (c) o.push(null)
                    else {
                        let s = a && typeof a.then == "function" ? await a : a
                        if (s === null) throw ((l = !1), new Fl())
                        if (o.push(s)) continue
                        l = !1
                    }
                } catch (a) {
                    o.destroy(a)
                }
                break
            }
        }
        return o
    }
    Qn.exports = Ul
})
var we = g((au, dr) => {
    var W = __process$,
        { ArrayPrototypeIndexOf: Bl, NumberIsInteger: Gl, NumberIsNaN: Hl, NumberParseInt: Vl, ObjectDefineProperties: tr, ObjectKeys: Yl, ObjectSetPrototypeOf: nr, Promise: Kl, SafeSet: zl, SymbolAsyncIterator: Xl, Symbol: Jl } = m()
    dr.exports = w
    w.ReadableState = yt
    var { EventEmitter: Ql } = EventEmitter,
        { Stream: z, prependListener: Zl } = Le(),
        { Buffer: ht } = __default3,
        { addAbortSignal: ea } = ke(),
        ta = Y(),
        y = j().debuglog("stream", (e) => {
            y = e
        }),
        na = Vn(),
        ue = Z(),
        { getHighWaterMark: ra, getDefaultHighWaterMark: ia } = Ce(),
        {
            aggregateTwoErrors: Zn,
            codes: { ERR_INVALID_ARG_TYPE: oa, ERR_METHOD_NOT_IMPLEMENTED: la, ERR_OUT_OF_RANGE: aa, ERR_STREAM_PUSH_AFTER_EOF: fa, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: ua },
        } = O(),
        { validateObject: sa } = _e(),
        ee = Jl("kPaused"),
        { StringDecoder: rr } = __default4,
        da = ct()
    nr(w.prototype, z.prototype)
    nr(w, z)
    var bt = () => {},
        { errorOrDestroy: fe } = ue
    function yt(e, t, n) {
        typeof n != "boolean" && (n = t instanceof v()), (this.objectMode = !!(e && e.objectMode)), n && (this.objectMode = this.objectMode || !!(e && e.readableObjectMode)), (this.highWaterMark = e ? ra(this, e, "readableHighWaterMark", n) : ia(!1)), (this.buffer = new na()), (this.length = 0), (this.pipes = []), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.constructed = !0), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this[ee] = null), (this.errorEmitted = !1), (this.emitClose = !e || e.emitClose !== !1), (this.autoDestroy = !e || e.autoDestroy !== !1), (this.destroyed = !1), (this.errored = null), (this.closed = !1), (this.closeEmitted = !1), (this.defaultEncoding = (e && e.defaultEncoding) || "utf8"), (this.awaitDrainWriters = null), (this.multiAwaitDrain = !1), (this.readingMore = !1), (this.dataEmitted = !1), (this.decoder = null), (this.encoding = null), e && e.encoding && ((this.decoder = new rr(e.encoding)), (this.encoding = e.encoding))
    }
    function w(e) {
        if (!(this instanceof w)) return new w(e)
        let t = this instanceof v()
        ;(this._readableState = new yt(e, this, t)),
            e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.construct == "function" && (this._construct = e.construct), e.signal && !t && ea(e.signal, this)),
            z.call(this, e),
            ue.construct(this, () => {
                this._readableState.needReadable && je(this, this._readableState)
            })
    }
    w.prototype.destroy = ue.destroy
    w.prototype._undestroy = ue.undestroy
    w.prototype._destroy = function (e, t) {
        t(e)
    }
    w.prototype[Ql.captureRejectionSymbol] = function (e) {
        this.destroy(e)
    }
    w.prototype.push = function (e, t) {
        return ir(this, e, t, !1)
    }
    w.prototype.unshift = function (e, t) {
        return ir(this, e, t, !0)
    }
    function ir(e, t, n, r) {
        y("readableAddChunk", t)
        let i = e._readableState,
            o
        if ((i.objectMode || (typeof t == "string" ? ((n = n || i.defaultEncoding), i.encoding !== n && (r && i.encoding ? (t = ht.from(t, n).toString(i.encoding)) : ((t = ht.from(t, n)), (n = "")))) : t instanceof ht ? (n = "") : z._isUint8Array(t) ? ((t = z._uint8ArrayToBuffer(t)), (n = "")) : t != null && (o = new oa("chunk", ["string", "Buffer", "Uint8Array"], t))), o)) fe(e, o)
        else if (t === null) (i.reading = !1), ba(e, i)
        else if (i.objectMode || (t && t.length > 0))
            if (r)
                if (i.endEmitted) fe(e, new ua())
                else {
                    if (i.destroyed || i.errored) return !1
                    _t(e, i, t, !0)
                }
            else if (i.ended) fe(e, new fa())
            else {
                if (i.destroyed || i.errored) return !1
                ;(i.reading = !1), i.decoder && !n ? ((t = i.decoder.write(t)), i.objectMode || t.length !== 0 ? _t(e, i, t, !1) : je(e, i)) : _t(e, i, t, !1)
            }
        else r || ((i.reading = !1), je(e, i))
        return !i.ended && (i.length < i.highWaterMark || i.length === 0)
    }
    function _t(e, t, n, r) {
        t.flowing && t.length === 0 && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : (t.awaitDrainWriters = null), (t.dataEmitted = !0), e.emit("data", n)) : ((t.length += t.objectMode ? 1 : n.length), r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && $e(e)), je(e, t)
    }
    w.prototype.isPaused = function () {
        let e = this._readableState
        return e[ee] === !0 || e.flowing === !1
    }
    w.prototype.setEncoding = function (e) {
        let t = new rr(e)
        ;(this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding)
        let n = this._readableState.buffer,
            r = ""
        for (let i of n) r += t.write(i)
        return n.clear(), r !== "" && n.push(r), (this._readableState.length = r.length), this
    }
    var ca = 1073741824
    function ha(e) {
        if (e > ca) throw new aa("size", "<= 1GiB", e)
        return e--, (e |= e >>> 1), (e |= e >>> 2), (e |= e >>> 4), (e |= e >>> 8), (e |= e >>> 16), e++, e
    }
    function er(e, t) {
        return e <= 0 || (t.length === 0 && t.ended) ? 0 : t.objectMode ? 1 : Hl(e) ? (t.flowing && t.length ? t.buffer.first().length : t.length) : e <= t.length ? e : t.ended ? t.length : 0
    }
    w.prototype.read = function (e) {
        y("read", e), e === void 0 ? (e = NaN) : Gl(e) || (e = Vl(e, 10))
        let t = this._readableState,
            n = e
        if ((e > t.highWaterMark && (t.highWaterMark = ha(e)), e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended))) return y("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? pt(this) : $e(this), null
        if (((e = er(e, t)), e === 0 && t.ended)) return t.length === 0 && pt(this), null
        let r = t.needReadable
        if ((y("need readable", r), (t.length === 0 || t.length - e < t.highWaterMark) && ((r = !0), y("length less than watermark", r)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed)) (r = !1), y("reading, ended or constructing", r)
        else if (r) {
            y("do read"), (t.reading = !0), (t.sync = !0), t.length === 0 && (t.needReadable = !0)
            try {
                this._read(t.highWaterMark)
            } catch (o) {
                fe(this, o)
            }
            ;(t.sync = !1), t.reading || (e = er(n, t))
        }
        let i
        return e > 0 ? (i = ur(e, t)) : (i = null), i === null ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0)) : ((t.length -= e), t.multiAwaitDrain ? t.awaitDrainWriters.clear() : (t.awaitDrainWriters = null)), t.length === 0 && (t.ended || (t.needReadable = !0), n !== e && t.ended && pt(this)), i !== null && !t.errorEmitted && !t.closeEmitted && ((t.dataEmitted = !0), this.emit("data", i)), i
    }
    function ba(e, t) {
        if ((y("onEofChunk"), !t.ended)) {
            if (t.decoder) {
                let n = t.decoder.end()
                n && n.length && (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length))
            }
            ;(t.ended = !0), t.sync ? $e(e) : ((t.needReadable = !1), (t.emittedReadable = !0), or(e))
        }
    }
    function $e(e) {
        let t = e._readableState
        y("emitReadable", t.needReadable, t.emittedReadable), (t.needReadable = !1), t.emittedReadable || (y("emitReadable", t.flowing), (t.emittedReadable = !0), W.nextTick(or, e))
    }
    function or(e) {
        let t = e._readableState
        y("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), (t.emittedReadable = !1)), (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark), ar(e)
    }
    function je(e, t) {
        !t.readingMore && t.constructed && ((t.readingMore = !0), W.nextTick(_a, e, t))
    }
    function _a(e, t) {
        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && t.length === 0)); ) {
            let n = t.length
            if ((y("maybeReadMore read 0"), e.read(0), n === t.length)) break
        }
        t.readingMore = !1
    }
    w.prototype._read = function (e) {
        throw new la("_read()")
    }
    w.prototype.pipe = function (e, t) {
        let n = this,
            r = this._readableState
        r.pipes.length === 1 && (r.multiAwaitDrain || ((r.multiAwaitDrain = !0), (r.awaitDrainWriters = new zl(r.awaitDrainWriters ? [r.awaitDrainWriters] : [])))), r.pipes.push(e), y("pipe count=%d opts=%j", r.pipes.length, t)
        let o = (!t || t.end !== !1) && e !== W.stdout && e !== W.stderr ? u : L
        r.endEmitted ? W.nextTick(o) : n.once("end", o), e.on("unpipe", l)
        function l(_, p) {
            y("onunpipe"), _ === n && p && p.hasUnpiped === !1 && ((p.hasUnpiped = !0), c())
        }
        function u() {
            y("onend"), e.end()
        }
        let f,
            a = !1
        function c() {
            y("cleanup"), e.removeListener("close", h), e.removeListener("finish", D), f && e.removeListener("drain", f), e.removeListener("error", d), e.removeListener("unpipe", l), n.removeListener("end", u), n.removeListener("end", L), n.removeListener("data", b), (a = !0), f && r.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && f()
        }
        function s() {
            a || (r.pipes.length === 1 && r.pipes[0] === e ? (y("false write response, pause", 0), (r.awaitDrainWriters = e), (r.multiAwaitDrain = !1)) : r.pipes.length > 1 && r.pipes.includes(e) && (y("false write response, pause", r.awaitDrainWriters.size), r.awaitDrainWriters.add(e)), n.pause()), f || ((f = pa(n, e)), e.on("drain", f))
        }
        n.on("data", b)
        function b(_) {
            y("ondata")
            let p = e.write(_)
            y("dest.write", p), p === !1 && s()
        }
        function d(_) {
            if ((y("onerror", _), L(), e.removeListener("error", d), e.listenerCount("error") === 0)) {
                let p = e._writableState || e._readableState
                p && !p.errorEmitted ? fe(e, _) : e.emit("error", _)
            }
        }
        Zl(e, "error", d)
        function h() {
            e.removeListener("finish", D), L()
        }
        e.once("close", h)
        function D() {
            y("onfinish"), e.removeListener("close", h), L()
        }
        e.once("finish", D)
        function L() {
            y("unpipe"), n.unpipe(e)
        }
        return e.emit("pipe", n), e.writableNeedDrain === !0 ? r.flowing && s() : r.flowing || (y("pipe resume"), n.resume()), e
    }
    function pa(e, t) {
        return function () {
            let r = e._readableState
            r.awaitDrainWriters === t ? (y("pipeOnDrain", 1), (r.awaitDrainWriters = null)) : r.multiAwaitDrain && (y("pipeOnDrain", r.awaitDrainWriters.size), r.awaitDrainWriters.delete(t)), (!r.awaitDrainWriters || r.awaitDrainWriters.size === 0) && e.listenerCount("data") && e.resume()
        }
    }
    w.prototype.unpipe = function (e) {
        let t = this._readableState,
            n = {
                hasUnpiped: !1,
            }
        if (t.pipes.length === 0) return this
        if (!e) {
            let i = t.pipes
            ;(t.pipes = []), this.pause()
            for (let o = 0; o < i.length; o++)
                i[o].emit("unpipe", this, {
                    hasUnpiped: !1,
                })
            return this
        }
        let r = Bl(t.pipes, e)
        return r === -1 ? this : (t.pipes.splice(r, 1), t.pipes.length === 0 && this.pause(), e.emit("unpipe", this, n), this)
    }
    w.prototype.on = function (e, t) {
        let n = z.prototype.on.call(this, e, t),
            r = this._readableState
        return e === "data" ? ((r.readableListening = this.listenerCount("readable") > 0), r.flowing !== !1 && this.resume()) : e === "readable" && !r.endEmitted && !r.readableListening && ((r.readableListening = r.needReadable = !0), (r.flowing = !1), (r.emittedReadable = !1), y("on readable", r.length, r.reading), r.length ? $e(this) : r.reading || W.nextTick(wa, this)), n
    }
    w.prototype.addListener = w.prototype.on
    w.prototype.removeListener = function (e, t) {
        let n = z.prototype.removeListener.call(this, e, t)
        return e === "readable" && W.nextTick(lr, this), n
    }
    w.prototype.off = w.prototype.removeListener
    w.prototype.removeAllListeners = function (e) {
        let t = z.prototype.removeAllListeners.apply(this, arguments)
        return (e === "readable" || e === void 0) && W.nextTick(lr, this), t
    }
    function lr(e) {
        let t = e._readableState
        ;(t.readableListening = e.listenerCount("readable") > 0), t.resumeScheduled && t[ee] === !1 ? (t.flowing = !0) : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null)
    }
    function wa(e) {
        y("readable nexttick read 0"), e.read(0)
    }
    w.prototype.resume = function () {
        let e = this._readableState
        return e.flowing || (y("resume"), (e.flowing = !e.readableListening), ya(this, e)), (e[ee] = !1), this
    }
    function ya(e, t) {
        t.resumeScheduled || ((t.resumeScheduled = !0), W.nextTick(ga, e, t))
    }
    function ga(e, t) {
        y("resume", t.reading), t.reading || e.read(0), (t.resumeScheduled = !1), e.emit("resume"), ar(e), t.flowing && !t.reading && e.read(0)
    }
    w.prototype.pause = function () {
        return y("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (y("pause"), (this._readableState.flowing = !1), this.emit("pause")), (this._readableState[ee] = !0), this
    }
    function ar(e) {
        let t = e._readableState
        for (y("flow", t.flowing); t.flowing && e.read() !== null; );
    }
    w.prototype.wrap = function (e) {
        let t = !1
        e.on("data", (r) => {
            !this.push(r) && e.pause && ((t = !0), e.pause())
        }),
            e.on("end", () => {
                this.push(null)
            }),
            e.on("error", (r) => {
                fe(this, r)
            }),
            e.on("close", () => {
                this.destroy()
            }),
            e.on("destroy", () => {
                this.destroy()
            }),
            (this._read = () => {
                t && e.resume && ((t = !1), e.resume())
            })
        let n = Yl(e)
        for (let r = 1; r < n.length; r++) {
            let i = n[r]
            this[i] === void 0 && typeof e[i] == "function" && (this[i] = e[i].bind(e))
        }
        return this
    }
    w.prototype[Xl] = function () {
        return fr(this)
    }
    w.prototype.iterator = function (e) {
        return e !== void 0 && sa(e, "options"), fr(this, e)
    }
    function fr(e, t) {
        typeof e.read != "function" &&
            (e = w.wrap(e, {
                objectMode: !0,
            }))
        let n = Sa(e, t)
        return (n.stream = e), n
    }
    async function* Sa(e, t) {
        let n = bt
        function r(l) {
            this === e ? (n(), (n = bt)) : (n = l)
        }
        e.on("readable", r)
        let i,
            o = ta(
                e,
                {
                    writable: !1,
                },
                (l) => {
                    ;(i = l ? Zn(i, l) : null), n(), (n = bt)
                }
            )
        try {
            for (;;) {
                let l = e.destroyed ? null : e.read()
                if (l !== null) yield l
                else {
                    if (i) throw i
                    if (i === null) return
                    await new Kl(r)
                }
            }
        } catch (l) {
            throw ((i = Zn(i, l)), i)
        } finally {
            ;(i || t?.destroyOnReturn !== !1) && (i === void 0 || e._readableState.autoDestroy) ? ue.destroyer(e, null) : (e.off("readable", r), o())
        }
    }
    tr(w.prototype, {
        readable: {
            __proto__: null,
            get() {
                let e = this._readableState
                return !!e && e.readable !== !1 && !e.destroyed && !e.errorEmitted && !e.endEmitted
            },
            set(e) {
                this._readableState && (this._readableState.readable = !!e)
            },
        },
        readableDidRead: {
            __proto__: null,
            enumerable: !1,
            get: function () {
                return this._readableState.dataEmitted
            },
        },
        readableAborted: {
            __proto__: null,
            enumerable: !1,
            get: function () {
                return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted)
            },
        },
        readableHighWaterMark: {
            __proto__: null,
            enumerable: !1,
            get: function () {
                return this._readableState.highWaterMark
            },
        },
        readableBuffer: {
            __proto__: null,
            enumerable: !1,
            get: function () {
                return this._readableState && this._readableState.buffer
            },
        },
        readableFlowing: {
            __proto__: null,
            enumerable: !1,
            get: function () {
                return this._readableState.flowing
            },
            set: function (e) {
                this._readableState && (this._readableState.flowing = e)
            },
        },
        readableLength: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState.length
            },
        },
        readableObjectMode: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.objectMode : !1
            },
        },
        readableEncoding: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.encoding : null
            },
        },
        errored: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.errored : null
            },
        },
        closed: {
            __proto__: null,
            get() {
                return this._readableState ? this._readableState.closed : !1
            },
        },
        destroyed: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.destroyed : !1
            },
            set(e) {
                !this._readableState || (this._readableState.destroyed = e)
            },
        },
        readableEnded: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._readableState ? this._readableState.endEmitted : !1
            },
        },
    })
    tr(yt.prototype, {
        pipesCount: {
            __proto__: null,
            get() {
                return this.pipes.length
            },
        },
        paused: {
            __proto__: null,
            get() {
                return this[ee] !== !1
            },
            set(e) {
                this[ee] = !!e
            },
        },
    })
    w._fromList = ur
    function ur(e, t) {
        if (t.length === 0) return null
        let n
        return t.objectMode ? (n = t.buffer.shift()) : !e || e >= t.length ? (t.decoder ? (n = t.buffer.join("")) : t.buffer.length === 1 ? (n = t.buffer.first()) : (n = t.buffer.concat(t.length)), t.buffer.clear()) : (n = t.buffer.consume(e, t.decoder)), n
    }
    function pt(e) {
        let t = e._readableState
        y("endReadable", t.endEmitted), t.endEmitted || ((t.ended = !0), W.nextTick(Ea, t, e))
    }
    function Ea(e, t) {
        if ((y("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && e.length === 0)) {
            if (((e.endEmitted = !0), t.emit("end"), t.writable && t.allowHalfOpen === !1)) W.nextTick(Ra, t)
            else if (e.autoDestroy) {
                let n = t._writableState
                ;(!n || (n.autoDestroy && (n.finished || n.writable === !1))) && t.destroy()
            }
        }
    }
    function Ra(e) {
        e.writable && !e.writableEnded && !e.destroyed && e.end()
    }
    w.from = function (e, t) {
        return da(w, e, t)
    }
    var wt
    function sr() {
        return wt === void 0 && (wt = {}), wt
    }
    w.fromWeb = function (e, t) {
        return sr().newStreamReadableFromReadableStream(e, t)
    }
    w.toWeb = function (e, t) {
        return sr().newReadableStreamFromStreamReadable(e, t)
    }
    w.wrap = function (e, t) {
        var n, r
        return new w({
            objectMode: (n = (r = e.readableObjectMode) !== null && r !== void 0 ? r : e.objectMode) !== null && n !== void 0 ? n : !0,
            ...t,
            destroy(i, o) {
                ue.destroyer(e, i), o(i)
            },
        }).wrap(e)
    }
})
var Tt = g((fu, Ar) => {
    var te = __process$,
        { ArrayPrototypeSlice: br, Error: Aa, FunctionPrototypeSymbolHasInstance: _r, ObjectDefineProperty: pr, ObjectDefineProperties: ma, ObjectSetPrototypeOf: wr, StringPrototypeToLowerCase: Ta, Symbol: Ia, SymbolHasInstance: Ma } = m()
    Ar.exports = S
    S.WritableState = Se
    var { EventEmitter: Na } = EventEmitter,
        ye = Le().Stream,
        { Buffer: ve } = __default3,
        Be = Z(),
        { addAbortSignal: Da } = ke(),
        { getHighWaterMark: Oa, getDefaultHighWaterMark: qa } = Ce(),
        { ERR_INVALID_ARG_TYPE: xa, ERR_METHOD_NOT_IMPLEMENTED: La, ERR_MULTIPLE_CALLBACK: yr, ERR_STREAM_CANNOT_PIPE: Pa, ERR_STREAM_DESTROYED: ge, ERR_STREAM_ALREADY_FINISHED: ka, ERR_STREAM_NULL_VALUES: Wa, ERR_STREAM_WRITE_AFTER_END: Ca, ERR_UNKNOWN_ENCODING: gr } = O().codes,
        { errorOrDestroy: se } = Be
    wr(S.prototype, ye.prototype)
    wr(S, ye)
    function Et() {}
    var de = Ia("kOnFinished")
    function Se(e, t, n) {
        typeof n != "boolean" && (n = t instanceof v()), (this.objectMode = !!(e && e.objectMode)), n && (this.objectMode = this.objectMode || !!(e && e.writableObjectMode)), (this.highWaterMark = e ? Oa(this, e, "writableHighWaterMark", n) : qa(!1)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1)
        let r = !!(e && e.decodeStrings === !1)
        ;(this.decodeStrings = !r), (this.defaultEncoding = (e && e.defaultEncoding) || "utf8"), (this.length = 0), (this.writing = !1), (this.corked = 0), (this.sync = !0), (this.bufferProcessing = !1), (this.onwrite = $a.bind(void 0, t)), (this.writecb = null), (this.writelen = 0), (this.afterWriteTickInfo = null), Ue(this), (this.pendingcb = 0), (this.constructed = !0), (this.prefinished = !1), (this.errorEmitted = !1), (this.emitClose = !e || e.emitClose !== !1), (this.autoDestroy = !e || e.autoDestroy !== !1), (this.errored = null), (this.closed = !1), (this.closeEmitted = !1), (this[de] = [])
    }
    function Ue(e) {
        ;(e.buffered = []), (e.bufferedIndex = 0), (e.allBuffers = !0), (e.allNoop = !0)
    }
    Se.prototype.getBuffer = function () {
        return br(this.buffered, this.bufferedIndex)
    }
    pr(Se.prototype, "bufferedRequestCount", {
        __proto__: null,
        get() {
            return this.buffered.length - this.bufferedIndex
        },
    })
    function S(e) {
        let t = this instanceof v()
        if (!t && !_r(S, this)) return new S(e)
        ;(this._writableState = new Se(e, this, t)),
            e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final), typeof e.construct == "function" && (this._construct = e.construct), e.signal && Da(e.signal, this)),
            ye.call(this, e),
            Be.construct(this, () => {
                let n = this._writableState
                n.writing || At(this, n), mt(this, n)
            })
    }
    pr(S, Ma, {
        __proto__: null,
        value: function (e) {
            return _r(this, e) ? !0 : this !== S ? !1 : e && e._writableState instanceof Se
        },
    })
    S.prototype.pipe = function () {
        se(this, new Pa())
    }
    function Sr(e, t, n, r) {
        let i = e._writableState
        if (typeof n == "function") (r = n), (n = i.defaultEncoding)
        else {
            if (!n) n = i.defaultEncoding
            else if (n !== "buffer" && !ve.isEncoding(n)) throw new gr(n)
            typeof r != "function" && (r = Et)
        }
        if (t === null) throw new Wa()
        if (!i.objectMode)
            if (typeof t == "string") i.decodeStrings !== !1 && ((t = ve.from(t, n)), (n = "buffer"))
            else if (t instanceof ve) n = "buffer"
            else if (ye._isUint8Array(t)) (t = ye._uint8ArrayToBuffer(t)), (n = "buffer")
            else throw new xa("chunk", ["string", "Buffer", "Uint8Array"], t)
        let o
        return i.ending ? (o = new Ca()) : i.destroyed && (o = new ge("write")), o ? (te.nextTick(r, o), se(e, o, !0), o) : (i.pendingcb++, ja(e, i, t, n, r))
    }
    S.prototype.write = function (e, t, n) {
        return Sr(this, e, t, n) === !0
    }
    S.prototype.cork = function () {
        this._writableState.corked++
    }
    S.prototype.uncork = function () {
        let e = this._writableState
        e.corked && (e.corked--, e.writing || At(this, e))
    }
    S.prototype.setDefaultEncoding = function (t) {
        if ((typeof t == "string" && (t = Ta(t)), !ve.isEncoding(t))) throw new gr(t)
        return (this._writableState.defaultEncoding = t), this
    }
    function ja(e, t, n, r, i) {
        let o = t.objectMode ? 1 : n.length
        t.length += o
        let l = t.length < t.highWaterMark
        return (
            l || (t.needDrain = !0),
            t.writing || t.corked || t.errored || !t.constructed
                ? (t.buffered.push({
                      chunk: n,
                      encoding: r,
                      callback: i,
                  }),
                  t.allBuffers && r !== "buffer" && (t.allBuffers = !1),
                  t.allNoop && i !== Et && (t.allNoop = !1))
                : ((t.writelen = o), (t.writecb = i), (t.writing = !0), (t.sync = !0), e._write(n, r, t.onwrite), (t.sync = !1)),
            l && !t.errored && !t.destroyed
        )
    }
    function cr(e, t, n, r, i, o, l) {
        ;(t.writelen = r), (t.writecb = l), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new ge("write")) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), (t.sync = !1)
    }
    function hr(e, t, n, r) {
        --t.pendingcb, r(n), Rt(t), se(e, n)
    }
    function $a(e, t) {
        let n = e._writableState,
            r = n.sync,
            i = n.writecb
        if (typeof i != "function") {
            se(e, new yr())
            return
        }
        ;(n.writing = !1),
            (n.writecb = null),
            (n.length -= n.writelen),
            (n.writelen = 0),
            t
                ? (t.stack, n.errored || (n.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), r ? te.nextTick(hr, e, n, t, i) : hr(e, n, t, i))
                : (n.buffered.length > n.bufferedIndex && At(e, n),
                  r
                      ? n.afterWriteTickInfo !== null && n.afterWriteTickInfo.cb === i
                          ? n.afterWriteTickInfo.count++
                          : ((n.afterWriteTickInfo = {
                                count: 1,
                                cb: i,
                                stream: e,
                                state: n,
                            }),
                            te.nextTick(va, n.afterWriteTickInfo))
                      : Er(e, n, 1, i))
    }
    function va({ stream: e, state: t, count: n, cb: r }) {
        return (t.afterWriteTickInfo = null), Er(e, t, n, r)
    }
    function Er(e, t, n, r) {
        for (!t.ending && !e.destroyed && t.length === 0 && t.needDrain && ((t.needDrain = !1), e.emit("drain")); n-- > 0; ) t.pendingcb--, r()
        t.destroyed && Rt(t), mt(e, t)
    }
    function Rt(e) {
        if (e.writing) return
        for (let i = e.bufferedIndex; i < e.buffered.length; ++i) {
            var t
            let { chunk: o, callback: l } = e.buffered[i],
                u = e.objectMode ? 1 : o.length
            ;(e.length -= u), l((t = e.errored) !== null && t !== void 0 ? t : new ge("write"))
        }
        let n = e[de].splice(0)
        for (let i = 0; i < n.length; i++) {
            var r
            n[i]((r = e.errored) !== null && r !== void 0 ? r : new ge("end"))
        }
        Ue(e)
    }
    function At(e, t) {
        if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed) return
        let { buffered: n, bufferedIndex: r, objectMode: i } = t,
            o = n.length - r
        if (!o) return
        let l = r
        if (((t.bufferProcessing = !0), o > 1 && e._writev)) {
            t.pendingcb -= o - 1
            let u = t.allNoop
                    ? Et
                    : (a) => {
                          for (let c = l; c < n.length; ++c) n[c].callback(a)
                      },
                f = t.allNoop && l === 0 ? n : br(n, l)
            ;(f.allBuffers = t.allBuffers), cr(e, t, !0, t.length, f, "", u), Ue(t)
        } else {
            do {
                let { chunk: u, encoding: f, callback: a } = n[l]
                n[l++] = null
                let c = i ? 1 : u.length
                cr(e, t, !1, c, u, f, a)
            } while (l < n.length && !t.writing)
            l === n.length ? Ue(t) : l > 256 ? (n.splice(0, l), (t.bufferedIndex = 0)) : (t.bufferedIndex = l)
        }
        t.bufferProcessing = !1
    }
    S.prototype._write = function (e, t, n) {
        if (this._writev)
            this._writev(
                [
                    {
                        chunk: e,
                        encoding: t,
                    },
                ],
                n
            )
        else throw new La("_write()")
    }
    S.prototype._writev = null
    S.prototype.end = function (e, t, n) {
        let r = this._writableState
        typeof e == "function" ? ((n = e), (e = null), (t = null)) : typeof t == "function" && ((n = t), (t = null))
        let i
        if (e != null) {
            let o = Sr(this, e, t)
            o instanceof Aa && (i = o)
        }
        return r.corked && ((r.corked = 1), this.uncork()), i || (!r.errored && !r.ending ? ((r.ending = !0), mt(this, r, !0), (r.ended = !0)) : r.finished ? (i = new ka("end")) : r.destroyed && (i = new ge("end"))), typeof n == "function" && (i || r.finished ? te.nextTick(n, i) : r[de].push(n)), this
    }
    function Fe(e) {
        return e.ending && !e.destroyed && e.constructed && e.length === 0 && !e.errored && e.buffered.length === 0 && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted
    }
    function Fa(e, t) {
        let n = !1
        function r(i) {
            if (n) {
                se(e, i ?? yr())
                return
            }
            if (((n = !0), t.pendingcb--, i)) {
                let o = t[de].splice(0)
                for (let l = 0; l < o.length; l++) o[l](i)
                se(e, i, t.sync)
            } else Fe(t) && ((t.prefinished = !0), e.emit("prefinish"), t.pendingcb++, te.nextTick(St, e, t))
        }
        ;(t.sync = !0), t.pendingcb++
        try {
            e._final(r)
        } catch (i) {
            r(i)
        }
        t.sync = !1
    }
    function Ua(e, t) {
        !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? ((t.finalCalled = !0), Fa(e, t)) : ((t.prefinished = !0), e.emit("prefinish")))
    }
    function mt(e, t, n) {
        Fe(t) &&
            (Ua(e, t),
            t.pendingcb === 0 &&
                (n
                    ? (t.pendingcb++,
                      te.nextTick(
                          (r, i) => {
                              Fe(i) ? St(r, i) : i.pendingcb--
                          },
                          e,
                          t
                      ))
                    : Fe(t) && (t.pendingcb++, St(e, t))))
    }
    function St(e, t) {
        t.pendingcb--, (t.finished = !0)
        let n = t[de].splice(0)
        for (let r = 0; r < n.length; r++) n[r]()
        if ((e.emit("finish"), t.autoDestroy)) {
            let r = e._readableState
            ;(!r || (r.autoDestroy && (r.endEmitted || r.readable === !1))) && e.destroy()
        }
    }
    ma(S.prototype, {
        closed: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.closed : !1
            },
        },
        destroyed: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.destroyed : !1
            },
            set(e) {
                this._writableState && (this._writableState.destroyed = e)
            },
        },
        writable: {
            __proto__: null,
            get() {
                let e = this._writableState
                return !!e && e.writable !== !1 && !e.destroyed && !e.errored && !e.ending && !e.ended
            },
            set(e) {
                this._writableState && (this._writableState.writable = !!e)
            },
        },
        writableFinished: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.finished : !1
            },
        },
        writableObjectMode: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.objectMode : !1
            },
        },
        writableBuffer: {
            __proto__: null,
            get() {
                return this._writableState && this._writableState.getBuffer()
            },
        },
        writableEnded: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.ending : !1
            },
        },
        writableNeedDrain: {
            __proto__: null,
            get() {
                let e = this._writableState
                return e ? !e.destroyed && !e.ending && e.needDrain : !1
            },
        },
        writableHighWaterMark: {
            __proto__: null,
            get() {
                return this._writableState && this._writableState.highWaterMark
            },
        },
        writableCorked: {
            __proto__: null,
            get() {
                return this._writableState ? this._writableState.corked : 0
            },
        },
        writableLength: {
            __proto__: null,
            get() {
                return this._writableState && this._writableState.length
            },
        },
        errored: {
            __proto__: null,
            enumerable: !1,
            get() {
                return this._writableState ? this._writableState.errored : null
            },
        },
        writableAborted: {
            __proto__: null,
            enumerable: !1,
            get: function () {
                return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished)
            },
        },
    })
    var Ba = Be.destroy
    S.prototype.destroy = function (e, t) {
        let n = this._writableState
        return !n.destroyed && (n.bufferedIndex < n.buffered.length || n[de].length) && te.nextTick(Rt, n), Ba.call(this, e, t), this
    }
    S.prototype._undestroy = Be.undestroy
    S.prototype._destroy = function (e, t) {
        t(e)
    }
    S.prototype[Na.captureRejectionSymbol] = function (e) {
        this.destroy(e)
    }
    var gt
    function Rr() {
        return gt === void 0 && (gt = {}), gt
    }
    S.fromWeb = function (e, t) {
        return Rr().newStreamWritableFromWritableStream(e, t)
    }
    S.toWeb = function (e) {
        return Rr().newWritableStreamFromStreamWritable(e)
    }
})
var kr = g((uu, Pr) => {
    var It = __process$,
        Ga = __default3,
        { isReadable: Ha, isWritable: Va, isIterable: mr, isNodeStream: Ya, isReadableNodeStream: Tr, isWritableNodeStream: Ir, isDuplexNodeStream: Ka } = V(),
        Mr = Y(),
        {
            AbortError: Lr,
            codes: { ERR_INVALID_ARG_TYPE: za, ERR_INVALID_RETURN_VALUE: Nr },
        } = O(),
        { destroyer: ce } = Z(),
        Xa = v(),
        Ja = we(),
        { createDeferredPromise: Dr } = j(),
        Or = ct(),
        qr = globalThis.Blob || Ga.Blob,
        Qa =
            typeof qr < "u"
                ? function (t) {
                      return t instanceof qr
                  }
                : function (t) {
                      return !1
                  },
        Za = globalThis.AbortController,
        { FunctionPrototypeCall: xr } = m(),
        ne = class extends Xa {
            constructor(t) {
                super(t), t?.readable === !1 && ((this._readableState.readable = !1), (this._readableState.ended = !0), (this._readableState.endEmitted = !0)), t?.writable === !1 && ((this._writableState.writable = !1), (this._writableState.ending = !0), (this._writableState.ended = !0), (this._writableState.finished = !0))
            }
        }
    Pr.exports = function e(t, n) {
        if (Ka(t)) return t
        if (Tr(t))
            return Ge({
                readable: t,
            })
        if (Ir(t))
            return Ge({
                writable: t,
            })
        if (Ya(t))
            return Ge({
                writable: !1,
                readable: !1,
            })
        if (typeof t == "function") {
            let { value: i, write: o, final: l, destroy: u } = ef(t)
            if (mr(i))
                return Or(ne, i, {
                    objectMode: !0,
                    write: o,
                    final: l,
                    destroy: u,
                })
            let f = i?.then
            if (typeof f == "function") {
                let a,
                    c = xr(
                        f,
                        i,
                        (s) => {
                            if (s != null) throw new Nr("nully", "body", s)
                        },
                        (s) => {
                            ce(a, s)
                        }
                    )
                return (a = new ne({
                    objectMode: !0,
                    readable: !1,
                    write: o,
                    final(s) {
                        l(async () => {
                            try {
                                await c, It.nextTick(s, null)
                            } catch (b) {
                                It.nextTick(s, b)
                            }
                        })
                    },
                    destroy: u,
                }))
            }
            throw new Nr("Iterable, AsyncIterable or AsyncFunction", n, i)
        }
        if (Qa(t)) return e(t.arrayBuffer())
        if (mr(t))
            return Or(ne, t, {
                objectMode: !0,
                writable: !1,
            })
        if (typeof t?.writable == "object" || typeof t?.readable == "object") {
            let i = t != null && t.readable ? (Tr(t?.readable) ? t?.readable : e(t.readable)) : void 0,
                o = t != null && t.writable ? (Ir(t?.writable) ? t?.writable : e(t.writable)) : void 0
            return Ge({
                readable: i,
                writable: o,
            })
        }
        let r = t?.then
        if (typeof r == "function") {
            let i
            return (
                xr(
                    r,
                    t,
                    (o) => {
                        o != null && i.push(o), i.push(null)
                    },
                    (o) => {
                        ce(i, o)
                    }
                ),
                (i = new ne({
                    objectMode: !0,
                    writable: !1,
                    read() {},
                }))
            )
        }
        throw new za(n, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t)
    }
    function ef(e) {
        let { promise: t, resolve: n } = Dr(),
            r = new Za(),
            i = r.signal
        return {
            value: e(
                (async function* () {
                    for (;;) {
                        let l = t
                        t = null
                        let { chunk: u, done: f, cb: a } = await l
                        if ((It.nextTick(a), f)) return
                        if (i.aborted)
                            throw new Lr(void 0, {
                                cause: i.reason,
                            })
                        ;({ promise: t, resolve: n } = Dr()), yield u
                    }
                })(),
                {
                    signal: i,
                }
            ),
            write(l, u, f) {
                let a = n
                ;(n = null),
                    a({
                        chunk: l,
                        done: !1,
                        cb: f,
                    })
            },
            final(l) {
                let u = n
                ;(n = null),
                    u({
                        done: !0,
                        cb: l,
                    })
            },
            destroy(l, u) {
                r.abort(), u(l)
            },
        }
    }
    function Ge(e) {
        let t = e.readable && typeof e.readable.read != "function" ? Ja.wrap(e.readable) : e.readable,
            n = e.writable,
            r = !!Ha(t),
            i = !!Va(n),
            o,
            l,
            u,
            f,
            a
        function c(s) {
            let b = f
            ;(f = null), b ? b(s) : s ? a.destroy(s) : !r && !i && a.destroy()
        }
        return (
            (a = new ne({
                readableObjectMode: !!(t != null && t.readableObjectMode),
                writableObjectMode: !!(n != null && n.writableObjectMode),
                readable: r,
                writable: i,
            })),
            i &&
                (Mr(n, (s) => {
                    ;(i = !1), s && ce(t, s), c(s)
                }),
                (a._write = function (s, b, d) {
                    n.write(s, b) ? d() : (o = d)
                }),
                (a._final = function (s) {
                    n.end(), (l = s)
                }),
                n.on("drain", function () {
                    if (o) {
                        let s = o
                        ;(o = null), s()
                    }
                }),
                n.on("finish", function () {
                    if (l) {
                        let s = l
                        ;(l = null), s()
                    }
                })),
            r &&
                (Mr(t, (s) => {
                    ;(r = !1), s && ce(t, s), c(s)
                }),
                t.on("readable", function () {
                    if (u) {
                        let s = u
                        ;(u = null), s()
                    }
                }),
                t.on("end", function () {
                    a.push(null)
                }),
                (a._read = function () {
                    for (;;) {
                        let s = t.read()
                        if (s === null) {
                            u = a._read
                            return
                        }
                        if (!a.push(s)) return
                    }
                })),
            (a._destroy = function (s, b) {
                !s && f !== null && (s = new Lr()), (u = null), (o = null), (l = null), f === null ? b(s) : ((f = b), ce(n, s), ce(t, s))
            }),
            a
        )
    }
})
var v = g((su, jr) => {
    "use strict"
    var { ObjectDefineProperties: tf, ObjectGetOwnPropertyDescriptor: B, ObjectKeys: nf, ObjectSetPrototypeOf: Wr } = m()
    jr.exports = C
    var Dt = we(),
        x = Tt()
    Wr(C.prototype, Dt.prototype)
    Wr(C, Dt)
    {
        let e = nf(x.prototype)
        for (let t = 0; t < e.length; t++) {
            let n = e[t]
            C.prototype[n] || (C.prototype[n] = x.prototype[n])
        }
    }
    function C(e) {
        if (!(this instanceof C)) return new C(e)
        Dt.call(this, e), x.call(this, e), e ? ((this.allowHalfOpen = e.allowHalfOpen !== !1), e.readable === !1 && ((this._readableState.readable = !1), (this._readableState.ended = !0), (this._readableState.endEmitted = !0)), e.writable === !1 && ((this._writableState.writable = !1), (this._writableState.ending = !0), (this._writableState.ended = !0), (this._writableState.finished = !0))) : (this.allowHalfOpen = !0)
    }
    tf(C.prototype, {
        writable: {
            __proto__: null,
            ...B(x.prototype, "writable"),
        },
        writableHighWaterMark: {
            __proto__: null,
            ...B(x.prototype, "writableHighWaterMark"),
        },
        writableObjectMode: {
            __proto__: null,
            ...B(x.prototype, "writableObjectMode"),
        },
        writableBuffer: {
            __proto__: null,
            ...B(x.prototype, "writableBuffer"),
        },
        writableLength: {
            __proto__: null,
            ...B(x.prototype, "writableLength"),
        },
        writableFinished: {
            __proto__: null,
            ...B(x.prototype, "writableFinished"),
        },
        writableCorked: {
            __proto__: null,
            ...B(x.prototype, "writableCorked"),
        },
        writableEnded: {
            __proto__: null,
            ...B(x.prototype, "writableEnded"),
        },
        writableNeedDrain: {
            __proto__: null,
            ...B(x.prototype, "writableNeedDrain"),
        },
        destroyed: {
            __proto__: null,
            get() {
                return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
            },
            set(e) {
                this._readableState && this._writableState && ((this._readableState.destroyed = e), (this._writableState.destroyed = e))
            },
        },
    })
    var Mt
    function Cr() {
        return Mt === void 0 && (Mt = {}), Mt
    }
    C.fromWeb = function (e, t) {
        return Cr().newStreamDuplexFromReadableWritablePair(e, t)
    }
    C.toWeb = function (e) {
        return Cr().newReadableWritablePairFromDuplex(e)
    }
    var Nt
    C.from = function (e) {
        return Nt || (Nt = kr()), Nt(e, "body")
    }
})
var xt = g((du, vr) => {
    "use strict"
    var { ObjectSetPrototypeOf: $r, Symbol: rf } = m()
    vr.exports = G
    var { ERR_METHOD_NOT_IMPLEMENTED: of } = O().codes,
        qt = v(),
        { getHighWaterMark: lf } = Ce()
    $r(G.prototype, qt.prototype)
    $r(G, qt)
    var Ee = rf("kCallback")
    function G(e) {
        if (!(this instanceof G)) return new G(e)
        let t = e ? lf(this, e, "readableHighWaterMark", !0) : null
        t === 0 &&
            (e = {
                ...e,
                highWaterMark: null,
                readableHighWaterMark: t,
                writableHighWaterMark: e.writableHighWaterMark || 0,
            }),
            qt.call(this, e),
            (this._readableState.sync = !1),
            (this[Ee] = null),
            e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)),
            this.on("prefinish", af)
    }
    function Ot(e) {
        typeof this._flush == "function" && !this.destroyed
            ? this._flush((t, n) => {
                  if (t) {
                      e ? e(t) : this.destroy(t)
                      return
                  }
                  n != null && this.push(n), this.push(null), e && e()
              })
            : (this.push(null), e && e())
    }
    function af() {
        this._final !== Ot && Ot.call(this)
    }
    G.prototype._final = Ot
    G.prototype._transform = function (e, t, n) {
        throw new of("_transform()")
    }
    G.prototype._write = function (e, t, n) {
        let r = this._readableState,
            i = this._writableState,
            o = r.length
        this._transform(e, t, (l, u) => {
            if (l) {
                n(l)
                return
            }
            u != null && this.push(u), i.ended || o === r.length || r.length < r.highWaterMark ? n() : (this[Ee] = n)
        })
    }
    G.prototype._read = function () {
        if (this[Ee]) {
            let e = this[Ee]
            ;(this[Ee] = null), e()
        }
    }
})
var Pt = g((cu, Ur) => {
    "use strict"
    var { ObjectSetPrototypeOf: Fr } = m()
    Ur.exports = he
    var Lt = xt()
    Fr(he.prototype, Lt.prototype)
    Fr(he, Lt)
    function he(e) {
        if (!(this instanceof he)) return new he(e)
        Lt.call(this, e)
    }
    he.prototype._transform = function (e, t, n) {
        n(null, e)
    }
})
var Ye = g((hu, zr) => {
    var He = __process$,
        { ArrayIsArray: ff, Promise: uf, SymbolAsyncIterator: sf } = m(),
        Ve = Y(),
        { once: df } = j(),
        cf = Z(),
        Br = v(),
        {
            aggregateTwoErrors: hf,
            codes: { ERR_INVALID_ARG_TYPE: Yr, ERR_INVALID_RETURN_VALUE: kt, ERR_MISSING_ARGS: bf, ERR_STREAM_DESTROYED: _f, ERR_STREAM_PREMATURE_CLOSE: pf },
            AbortError: wf,
        } = O(),
        { validateFunction: yf, validateAbortSignal: gf } = _e(),
        { isIterable: be, isReadable: Wt, isReadableNodeStream: $t, isNodeStream: Gr } = V(),
        Sf = globalThis.AbortController,
        Ct,
        jt
    function Hr(e, t, n) {
        let r = !1
        e.on("close", () => {
            r = !0
        })
        let i = Ve(
            e,
            {
                readable: t,
                writable: n,
            },
            (o) => {
                r = !o
            }
        )
        return {
            destroy: (o) => {
                r || ((r = !0), cf.destroyer(e, o || new _f("pipe")))
            },
            cleanup: i,
        }
    }
    function Ef(e) {
        return yf(e[e.length - 1], "streams[stream.length - 1]"), e.pop()
    }
    function Rf(e) {
        if (be(e)) return e
        if ($t(e)) return Af(e)
        throw new Yr("val", ["Readable", "Iterable", "AsyncIterable"], e)
    }
    async function* Af(e) {
        jt || (jt = we()), yield* jt.prototype[sf].call(e)
    }
    async function Vr(e, t, n, { end: r }) {
        let i,
            o = null,
            l = (a) => {
                if ((a && (i = a), o)) {
                    let c = o
                    ;(o = null), c()
                }
            },
            u = () =>
                new uf((a, c) => {
                    i
                        ? c(i)
                        : (o = () => {
                              i ? c(i) : a()
                          })
                })
        t.on("drain", l)
        let f = Ve(
            t,
            {
                readable: !1,
            },
            l
        )
        try {
            t.writableNeedDrain && (await u())
            for await (let a of e) t.write(a) || (await u())
            r && t.end(), await u(), n()
        } catch (a) {
            n(i !== a ? hf(i, a) : a)
        } finally {
            f(), t.off("drain", l)
        }
    }
    function mf(...e) {
        return Kr(e, df(Ef(e)))
    }
    function Kr(e, t, n) {
        if ((e.length === 1 && ff(e[0]) && (e = e[0]), e.length < 2)) throw new bf("streams")
        let r = new Sf(),
            i = r.signal,
            o = n?.signal,
            l = []
        gf(o, "options.signal")
        function u() {
            d(new wf())
        }
        o?.addEventListener("abort", u)
        let f,
            a,
            c = [],
            s = 0
        function b(_) {
            d(_, --s === 0)
        }
        function d(_, p) {
            if ((_ && (!f || f.code === "ERR_STREAM_PREMATURE_CLOSE") && (f = _), !(!f && !p))) {
                for (; c.length; ) c.shift()(f)
                o?.removeEventListener("abort", u), r.abort(), p && (f || l.forEach((I) => I()), He.nextTick(t, f, a))
            }
        }
        let h
        for (let _ = 0; _ < e.length; _++) {
            let p = e[_],
                I = _ < e.length - 1,
                M = _ > 0,
                F = I || n?.end !== !1,
                re = _ === e.length - 1
            if (Gr(p)) {
                let P = function (U) {
                    U && U.name !== "AbortError" && U.code !== "ERR_STREAM_PREMATURE_CLOSE" && b(U)
                }
                if (F) {
                    let { destroy: U, cleanup: ze } = Hr(p, I, M)
                    c.push(U), Wt(p) && re && l.push(ze)
                }
                p.on("error", P),
                    Wt(p) &&
                        re &&
                        l.push(() => {
                            p.removeListener("error", P)
                        })
            }
            if (_ === 0)
                if (typeof p == "function") {
                    if (
                        ((h = p({
                            signal: i,
                        })),
                        !be(h))
                    )
                        throw new kt("Iterable, AsyncIterable or Stream", "source", h)
                } else be(p) || $t(p) ? (h = p) : (h = Br.from(p))
            else if (typeof p == "function")
                if (
                    ((h = Rf(h)),
                    (h = p(h, {
                        signal: i,
                    })),
                    I)
                ) {
                    if (!be(h, !0)) throw new kt("AsyncIterable", `transform[${_ - 1}]`, h)
                } else {
                    var D
                    Ct || (Ct = Pt())
                    let P = new Ct({
                            objectMode: !0,
                        }),
                        U = (D = h) === null || D === void 0 ? void 0 : D.then
                    if (typeof U == "function")
                        s++,
                            U.call(
                                h,
                                (ie) => {
                                    ;(a = ie), ie != null && P.write(ie), F && P.end(), He.nextTick(b)
                                },
                                (ie) => {
                                    P.destroy(ie), He.nextTick(b, ie)
                                }
                            )
                    else if (be(h, !0))
                        s++,
                            Vr(h, P, b, {
                                end: F,
                            })
                    else throw new kt("AsyncIterable or Promise", "destination", h)
                    h = P
                    let { destroy: ze, cleanup: _i } = Hr(h, !1, !0)
                    c.push(ze), re && l.push(_i)
                }
            else if (Gr(p)) {
                if ($t(h)) {
                    s += 2
                    let P = Tf(h, p, b, {
                        end: F,
                    })
                    Wt(p) && re && l.push(P)
                } else if (be(h))
                    s++,
                        Vr(h, p, b, {
                            end: F,
                        })
                else throw new Yr("val", ["Readable", "Iterable", "AsyncIterable"], h)
                h = p
            } else h = Br.from(p)
        }
        return ((i != null && i.aborted) || (o != null && o.aborted)) && He.nextTick(u), h
    }
    function Tf(e, t, n, { end: r }) {
        let i = !1
        return (
            t.on("close", () => {
                i || n(new pf())
            }),
            e.pipe(t, {
                end: r,
            }),
            r
                ? e.once("end", () => {
                      ;(i = !0), t.end()
                  })
                : n(),
            Ve(
                e,
                {
                    readable: !0,
                    writable: !1,
                },
                (o) => {
                    let l = e._readableState
                    o && o.code === "ERR_STREAM_PREMATURE_CLOSE" && l && l.ended && !l.errored && !l.errorEmitted ? e.once("end", n).once("error", n) : n(o)
                }
            ),
            Ve(
                t,
                {
                    readable: !1,
                    writable: !0,
                },
                n
            )
        )
    }
    zr.exports = {
        pipelineImpl: Kr,
        pipeline: mf,
    }
})
var ei = g((bu, Zr) => {
    "use strict"
    var { pipeline: If } = Ye(),
        Ke = v(),
        { destroyer: Mf } = Z(),
        { isNodeStream: Nf, isReadable: Xr, isWritable: Jr } = V(),
        {
            AbortError: Df,
            codes: { ERR_INVALID_ARG_VALUE: Qr, ERR_MISSING_ARGS: Of },
        } = O()
    Zr.exports = function (...t) {
        if (t.length === 0) throw new Of("streams")
        if (t.length === 1) return Ke.from(t[0])
        let n = [...t]
        if ((typeof t[0] == "function" && (t[0] = Ke.from(t[0])), typeof t[t.length - 1] == "function")) {
            let d = t.length - 1
            t[d] = Ke.from(t[d])
        }
        for (let d = 0; d < t.length; ++d)
            if (!!Nf(t[d])) {
                if (d < t.length - 1 && !Xr(t[d])) throw new Qr(`streams[${d}]`, n[d], "must be readable")
                if (d > 0 && !Jr(t[d])) throw new Qr(`streams[${d}]`, n[d], "must be writable")
            }
        let r, i, o, l, u
        function f(d) {
            let h = l
            ;(l = null), h ? h(d) : d ? u.destroy(d) : !b && !s && u.destroy()
        }
        let a = t[0],
            c = If(t, f),
            s = !!Jr(a),
            b = !!Xr(c)
        return (
            (u = new Ke({
                writableObjectMode: !!(a != null && a.writableObjectMode),
                readableObjectMode: !!(c != null && c.writableObjectMode),
                writable: s,
                readable: b,
            })),
            s &&
                ((u._write = function (d, h, D) {
                    a.write(d, h) ? D() : (r = D)
                }),
                (u._final = function (d) {
                    a.end(), (i = d)
                }),
                a.on("drain", function () {
                    if (r) {
                        let d = r
                        ;(r = null), d()
                    }
                }),
                c.on("finish", function () {
                    if (i) {
                        let d = i
                        ;(i = null), d()
                    }
                })),
            b &&
                (c.on("readable", function () {
                    if (o) {
                        let d = o
                        ;(o = null), d()
                    }
                }),
                c.on("end", function () {
                    u.push(null)
                }),
                (u._read = function () {
                    for (;;) {
                        let d = c.read()
                        if (d === null) {
                            o = u._read
                            return
                        }
                        if (!u.push(d)) return
                    }
                })),
            (u._destroy = function (d, h) {
                !d && l !== null && (d = new Df()), (o = null), (r = null), (i = null), l === null ? h(d) : ((l = h), Mf(c, d))
            }),
            u
        )
    }
})
var vt = g((_u, ti) => {
    "use strict"
    var { ArrayPrototypePop: qf, Promise: xf } = m(),
        { isIterable: Lf, isNodeStream: Pf } = V(),
        { pipelineImpl: kf } = Ye(),
        { finished: Wf } = Y()
    function Cf(...e) {
        return new xf((t, n) => {
            let r,
                i,
                o = e[e.length - 1]
            if (o && typeof o == "object" && !Pf(o) && !Lf(o)) {
                let l = qf(e)
                ;(r = l.signal), (i = l.end)
            }
            kf(
                e,
                (l, u) => {
                    l ? n(l) : t(u)
                },
                {
                    signal: r,
                    end: i,
                }
            )
        })
    }
    ti.exports = {
        finished: Wf,
        pipeline: Cf,
    }
})
var di = g((pu, si) => {
    var { Buffer: jf } = __default3,
        { ObjectDefineProperty: H, ObjectKeys: ii, ReflectApply: oi } = m(),
        {
            promisify: { custom: li },
        } = j(),
        { streamReturningOperators: ni, promiseReturningOperators: ri } = xn(),
        {
            codes: { ERR_ILLEGAL_CONSTRUCTOR: ai },
        } = O(),
        $f = ei(),
        { pipeline: fi } = Ye(),
        { destroyer: vf } = Z(),
        ui = Y(),
        Ft = vt(),
        Ut = V(),
        R = (si.exports = Le().Stream)
    R.isDisturbed = Ut.isDisturbed
    R.isErrored = Ut.isErrored
    R.isReadable = Ut.isReadable
    R.Readable = we()
    for (let e of ii(ni)) {
        let n = function (...r) {
            if (new.target) throw ai()
            return R.Readable.from(oi(t, this, r))
        }
        n
        let t = ni[e]
        H(n, "name", {
            __proto__: null,
            value: t.name,
        }),
            H(n, "length", {
                __proto__: null,
                value: t.length,
            }),
            H(R.Readable.prototype, e, {
                __proto__: null,
                value: n,
                enumerable: !1,
                configurable: !0,
                writable: !0,
            })
    }
    for (let e of ii(ri)) {
        let n = function (...i) {
            if (new.target) throw ai()
            return oi(t, this, i)
        }
        n
        let t = ri[e]
        H(n, "name", {
            __proto__: null,
            value: t.name,
        }),
            H(n, "length", {
                __proto__: null,
                value: t.length,
            }),
            H(R.Readable.prototype, e, {
                __proto__: null,
                value: n,
                enumerable: !1,
                configurable: !0,
                writable: !0,
            })
    }
    R.Writable = Tt()
    R.Duplex = v()
    R.Transform = xt()
    R.PassThrough = Pt()
    R.pipeline = fi
    var { addAbortSignal: Ff } = ke()
    R.addAbortSignal = Ff
    R.finished = ui
    R.destroy = vf
    R.compose = $f
    H(R, "promises", {
        __proto__: null,
        configurable: !0,
        enumerable: !0,
        get() {
            return Ft
        },
    })
    H(fi, li, {
        __proto__: null,
        enumerable: !0,
        get() {
            return Ft.pipeline
        },
    })
    H(ui, li, {
        __proto__: null,
        enumerable: !0,
        get() {
            return Ft.finished
        },
    })
    R.Stream = R
    R._isUint8Array = function (t) {
        return t instanceof Uint8Array
    }
    R._uint8ArrayToBuffer = function (t) {
        return jf.from(t.buffer, t.byteOffset, t.byteLength)
    }
})
var ci = g((wu, A) => {
    "use strict"
    var T = di(),
        Bf = vt(),
        Gf = T.Readable.destroy
    A.exports = T.Readable
    A.exports._uint8ArrayToBuffer = T._uint8ArrayToBuffer
    A.exports._isUint8Array = T._isUint8Array
    A.exports.isDisturbed = T.isDisturbed
    A.exports.isErrored = T.isErrored
    A.exports.isReadable = T.isReadable
    A.exports.Readable = T.Readable
    A.exports.Writable = T.Writable
    A.exports.Duplex = T.Duplex
    A.exports.Transform = T.Transform
    A.exports.PassThrough = T.PassThrough
    A.exports.addAbortSignal = T.addAbortSignal
    A.exports.finished = T.finished
    A.exports.destroy = T.destroy
    A.exports.destroy = Gf
    A.exports.pipeline = T.pipeline
    A.exports.compose = T.compose
    Object.defineProperty(T, "promises", {
        configurable: !0,
        enumerable: !0,
        get() {
            return Bf
        },
    })
    A.exports.Stream = T.Stream
    A.exports.default = A.exports
})
var bi = Ri(ci()),
    { _uint8ArrayToBuffer: yu, _isUint8Array: gu, isDisturbed: Su, isErrored: Eu, isReadable: Ru, Readable: Au, Writable: mu, Duplex: Tu, Transform: Iu, PassThrough: Mu, addAbortSignal: Nu, finished: Du, destroy: Ou, pipeline: qu, compose: xu, Stream: Lu } = bi,
    { default: hi, ...Hf } = bi
const process1 = __process$
const { Buffer: Buffer1 } = __default3
const Readable = Au
const Writable = mu
const Duplex = Tu
function isReadableStream(object) {
    return object instanceof ReadableStream
}
function isWritableStream(object) {
    return object instanceof WritableStream
}
Readable.fromWeb = function (readableStream, options = kEmptyObject) {
    if (!isReadableStream(readableStream)) {
        throw new ERR_INVALID_ARG_TYPE("readableStream", "ReadableStream", readableStream)
    }
    validateObject(options, "options")
    const { highWaterMark, encoding, objectMode = false, signal } = options
    if (encoding !== undefined && !Buffer1.isEncoding(encoding)) {
        throw new ERR_INVALID_ARG_VALUE(encoding, "options.encoding")
    }
    validateBoolean(objectMode, "options.objectMode")
    const reader = readableStream.getReader()
    let closed = false
    const readable = new Readable({
        objectMode,
        highWaterMark,
        encoding,
        signal,
        read() {
            reader.read().then(
                (chunk) => {
                    if (chunk.done) {
                        readable.push(null)
                    } else {
                        readable.push(chunk.value)
                    }
                },
                (error) => destroy.call(readable, error)
            )
        },
        destroy(error, callback) {
            function done() {
                try {
                    callback(error)
                } catch (error) {
                    process1.nextTick(() => {
                        throw error
                    })
                }
            }
            if (!closed) {
                reader.cancel(error).then(done, done)
                return
            }
            done()
        },
    })
    reader.closed.then(
        () => {
            closed = true
            if (!isReadableEnded1(readable)) {
                readable.push(null)
            }
        },
        (error) => {
            closed = true
            destroy.call(readable, error)
        }
    )
    return readable
}
Writable.fromWeb = function (writableStream, options = kEmptyObject) {
    if (!isWritableStream(writableStream)) {
        throw new ERR_INVALID_ARG_TYPE("writableStream", "WritableStream", writableStream)
    }
    validateObject(options, "options")
    const { highWaterMark, decodeStrings = true, objectMode = false, signal } = options
    validateBoolean(objectMode, "options.objectMode")
    validateBoolean(decodeStrings, "options.decodeStrings")
    const writer = writableStream.getWriter()
    let closed = false
    const writable = new Writable({
        highWaterMark,
        objectMode,
        decodeStrings,
        signal,
        writev(chunks, callback) {
            function done(error) {
                error = error.filter((e) => e)
                try {
                    callback(error.length === 0 ? undefined : error)
                } catch (error) {
                    process1.nextTick(() => destroy.call(writable, error))
                }
            }
            writer.ready.then(() => Promise.all(chunks.map((data) => writer.write(data.chunk))).then(done, done), done)
        },
        write(chunk, encoding, callback) {
            if (typeof chunk === "string" && decodeStrings && !objectMode) {
                chunk = Buffer1.from(chunk, encoding)
                chunk = new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength)
            }
            function done(error) {
                try {
                    callback(error)
                } catch (error) {
                    destroy(this, duplex, error)
                }
            }
            writer.ready.then(() => writer.write(chunk).then(done, done), done)
        },
        destroy(error, callback) {
            function done() {
                try {
                    callback(error)
                } catch (error) {
                    process1.nextTick(() => {
                        throw error
                    })
                }
            }
            if (!closed) {
                if (error != null) {
                    writer.abort(error).then(done, done)
                } else {
                    writer.close().then(done, done)
                }
                return
            }
            done()
        },
        final(callback) {
            function done(error) {
                try {
                    callback(error)
                } catch (error) {
                    process1.nextTick(() => destroy.call(writable, error))
                }
            }
            if (!closed) {
                writer.close().then(done, done)
            }
        },
    })
    writer.closed.then(
        () => {
            closed = true
            if (!isWritableEnded(writable)) {
                destroy.call(writable, new ERR_STREAM_PREMATURE_CLOSE())
            }
        },
        (error) => {
            closed = true
            destroy.call(writable, error)
        }
    )
    return writable
}
Duplex.fromWeb = function (pair, options = kEmptyObject) {
    validateObject(pair, "pair")
    const { readable: readableStream, writable: writableStream } = pair
    if (!isReadableStream(readableStream)) {
        throw new ERR_INVALID_ARG_TYPE("pair.readable", "ReadableStream", readableStream)
    }
    if (!isWritableStream(writableStream)) {
        throw new ERR_INVALID_ARG_TYPE("pair.writable", "WritableStream", writableStream)
    }
    validateObject(options, "options")
    const { allowHalfOpen = false, objectMode = false, encoding, decodeStrings = true, highWaterMark, signal } = options
    validateBoolean(objectMode, "options.objectMode")
    if (encoding !== undefined && !Buffer1.isEncoding(encoding)) {
        throw new ERR_INVALID_ARG_VALUE(encoding, "options.encoding")
    }
    const writer = writableStream.getWriter()
    const reader = readableStream.getReader()
    let writableClosed = false
    let readableClosed = false
    const duplex1 = new Duplex({
        allowHalfOpen,
        highWaterMark,
        objectMode,
        encoding,
        decodeStrings,
        signal,
        writev(chunks, callback) {
            function done(error) {
                error = error.filter((e) => e)
                try {
                    callback(error.length === 0 ? undefined : error)
                } catch (error) {
                    process1.nextTick(() => destroy(duplex1, error))
                }
            }
            writer.ready.then(() => Promise.all(chunks.map((data) => writer.write(data.chunk))).then(done, done), done)
        },
        write(chunk, encoding, callback) {
            if (typeof chunk === "string" && decodeStrings && !objectMode) {
                chunk = Buffer1.from(chunk, encoding)
                chunk = new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength)
            }
            function done(error) {
                try {
                    callback(error)
                } catch (error) {
                    destroy(duplex1, error)
                }
            }
            writer.ready.then(() => writer.write(chunk).then(done, done), done)
        },
        final(callback) {
            function done(error) {
                try {
                    callback(error)
                } catch (error) {
                    process1.nextTick(() => destroy(duplex1, error))
                }
            }
            if (!writableClosed) {
                writer.close().then(done, done)
            }
        },
        read() {
            reader.read().then(
                (chunk) => {
                    if (chunk.done) {
                        duplex1.push(null)
                    } else {
                        duplex1.push(chunk.value)
                    }
                },
                (error) => destroy(duplex1, error)
            )
        },
        destroy(error, callback) {
            function done() {
                try {
                    callback(error)
                } catch (error) {
                    process1.nextTick(() => {
                        throw error
                    })
                }
            }
            async function closeWriter() {
                if (!writableClosed) {
                    await writer.abort(error)
                }
            }
            async function closeReader() {
                if (!readableClosed) {
                    await reader.cancel(error)
                }
            }
            if (!writableClosed || !readableClosed) {
                Promise.all([closeWriter(), closeReader()]).then(done, done)
                return
            }
            done()
        },
    })
    writer.closed.then(
        () => {
            writableClosed = true
            if (!isWritableEnded(duplex1)) {
                destroy(duplex1, new ERR_STREAM_PREMATURE_CLOSE())
            }
        },
        (error) => {
            writableClosed = true
            readableClosed = true
            destroy(duplex1, error)
        }
    )
    reader.closed.then(
        () => {
            readableClosed = true
            if (!isReadableEnded1(duplex1)) {
                duplex1.push(null)
            }
        },
        (error) => {
            writableClosed = true
            readableClosed = true
            destroy(duplex1, error)
        }
    )
    return duplex1
}
delete Readable.Duplex
delete Readable.PassThrough
delete Readable.Readable
delete Readable.Stream
delete Readable.Transform
delete Readable.Writable
delete Readable._isUint8Array
delete Readable._uint8ArrayToBuffer
delete Readable.addAbortSignal
delete Readable.compose
delete Readable.destroy
delete Readable.finished
delete Readable.isDisturbed
delete Readable.isErrored
delete Readable.isReadable
delete Readable.pipeline
function newReadableStreamFromStreamReadable(streamReadable, options = kEmptyObject) {
    if (typeof streamReadable?._readableState !== "object") {
        throw new ERR_INVALID_ARG_TYPE("streamReadable", "stream.Readable", streamReadable)
    }
    if (isDestroyed(streamReadable) || !isReadable1(streamReadable)) {
        const readable = new ReadableStream()
        readable.cancel()
        return readable
    }
    const objectMode = streamReadable.readableObjectMode
    const highWaterMark = streamReadable.readableHighWaterMark
    const evaluateStrategyOrFallback = (strategy) => {
        if (strategy) {
            return strategy
        }
        if (objectMode) {
            return new CountQueuingStrategy({
                highWaterMark,
            })
        }
        return {
            highWaterMark,
        }
    }
    const strategy = evaluateStrategyOrFallback(options?.strategy)
    let controller
    function onData(chunk) {
        if (Buffer1.isBuffer(chunk) && !objectMode) {
            chunk = new Uint8Array(chunk)
        }
        controller.enqueue(chunk)
        if (controller.desiredSize <= 0) {
            streamReadable.pause()
        }
    }
    streamReadable.pause()
    const cleanup = eos(streamReadable, (error) => {
        if (error?.code === "ERR_STREAM_PREMATURE_CLOSE") {
            const err = new AbortError(undefined, {
                cause: error,
            })
            error = err
        }
        cleanup()
        streamReadable.on("error", () => {})
        if (error) {
            return controller.error(error)
        }
        controller.close()
    })
    streamReadable.on("data", onData)
    return new ReadableStream(
        {
            start(c) {
                controller = c
            },
            pull() {
                streamReadable.resume()
            },
            cancel(reason) {
                destroy(streamReadable, reason)
            },
        },
        strategy
    )
}
function newWritableStreamFromStreamWritable(streamWritable) {
    if (typeof streamWritable?._writableState !== "object") {
        throw new ERR_INVALID_ARG_TYPE("streamWritable", "stream.Writable", streamWritable)
    }
    if (isDestroyed(streamWritable) || !isWritable1(streamWritable)) {
        const writable = new WritableStream()
        writable.close()
        return writable
    }
    const highWaterMark = streamWritable.writableHighWaterMark
    const strategy = streamWritable.writableObjectMode
        ? new CountQueuingStrategy({
              highWaterMark,
          })
        : {
              highWaterMark,
          }
    let controller
    let backpressurePromise
    let closed
    function onDrain() {
        if (backpressurePromise !== undefined) {
            backpressurePromise.resolve()
        }
    }
    const cleanup = eos(streamWritable, (error) => {
        if (error?.code === "ERR_STREAM_PREMATURE_CLOSE") {
            const err = new AbortError(undefined, {
                cause: error,
            })
            error = err
        }
        cleanup()
        streamWritable.on("error", () => {})
        if (error != null) {
            if (backpressurePromise !== undefined) {
                backpressurePromise.reject(error)
            }
            if (closed !== undefined) {
                closed.reject(error)
                closed = undefined
            }
            controller.error(error)
            controller = undefined
            return
        }
        if (closed !== undefined) {
            closed.resolve()
            closed = undefined
            return
        }
        controller.error(new AbortError())
        controller = undefined
    })
    streamWritable.on("drain", onDrain)
    return new WritableStream(
        {
            start(c) {
                controller = c
            },
            async write(chunk) {
                if (streamWritable.writableNeedDrain || !streamWritable.write(chunk)) {
                    backpressurePromise = createDeferredPromise()
                    return backpressurePromise.promise.finally(() => {
                        backpressurePromise = undefined
                    })
                }
            },
            abort(reason) {
                destroy(streamWritable, reason)
            },
            close() {
                if (closed === undefined && !isWritableEnded(streamWritable)) {
                    closed = createDeferredPromise()
                    streamWritable.end()
                    return closed.promise
                }
                controller = undefined
                return Promise.resolve()
            },
        },
        strategy
    )
}
function newReadableWritablePairFromDuplex(duplex1) {
    if (typeof duplex1?._writableState !== "object" || typeof duplex1?._readableState !== "object") {
        throw new ERR_INVALID_ARG_TYPE("duplex", "stream.Duplex", duplex1)
    }
    if (isDestroyed(duplex1)) {
        const writable = new WritableStream()
        const readable = new ReadableStream()
        writable.close()
        readable.cancel()
        return {
            readable,
            writable,
        }
    }
    const writable = isWritable1(duplex1) ? newWritableStreamFromStreamWritable(duplex1) : new WritableStream()
    if (!isWritable1(duplex1)) {
        writable.close()
    }
    const readable = isReadable1(duplex1) ? newReadableStreamFromStreamReadable(duplex1) : new ReadableStream()
    if (!isReadable1(duplex1)) {
        readable.cancel()
    }
    return {
        writable,
        readable,
    }
}
Readable.toWeb = newReadableStreamFromStreamReadable
Writable.toWeb = newWritableStreamFromStreamWritable
Duplex.toWeb = newReadableWritablePairFromDuplex
function createWritableStdioStream(writer, name) {
    const stream = new mu({
        write(buf, enc, cb) {
            if (!writer) {
                this.destroy(new Error(`Deno.${name} is not available in this environment`))
                return
            }
            writer.writeSync(buf instanceof Uint8Array ? buf : Buffer.from(buf, enc))
            cb()
        },
        destroy(err, cb) {
            cb(err)
            this._undestroy()
            if (!this._writableState.emitClose) {
                nextTick(() => this.emit("close"))
            }
        },
    })
    stream.fd = writer?.rid ?? -1
    stream.destroySoon = stream.destroy
    stream._isStdio = true
    stream.once("close", () => writer?.close())
    Object.defineProperties(stream, {
        columns: {
            enumerable: true,
            configurable: true,
            get: () => (Deno.isatty?.(writer?.rid) ? Deno.consoleSize?.().columns : undefined),
        },
        rows: {
            enumerable: true,
            configurable: true,
            get: () => (Deno.isatty?.(writer?.rid) ? Deno.consoleSize?.().rows : undefined),
        },
        isTTY: {
            enumerable: true,
            configurable: true,
            get: () => Deno.isatty?.(writer?.rid),
        },
        getWindowSize: {
            enumerable: true,
            configurable: true,
            value: () => (Deno.isatty?.(writer?.rid) ? Object.values(Deno.consoleSize?.()) : undefined),
        },
    })
    if (Deno.isatty?.(writer?.rid)) {
        stream.cursorTo = function (x, y, callback) {
            return cursorTo(this, x, y, callback)
        }
        stream.moveCursor = function (dx, dy, callback) {
            return moveCursor(this, dx, dy, callback)
        }
        stream.clearLine = function (dir, callback) {
            return clearLine(this, dir, callback)
        }
        stream.clearScreenDown = function (callback) {
            return clearScreenDown(this, callback)
        }
    }
    return stream
}
const stderr = (stdio.stderr = createWritableStdioStream(Deno.stderr, "stderr"))
const stdout = (stdio.stdout = createWritableStdioStream(Deno.stdout, "stdout"))
function _guessStdinType(fd) {
    if (typeof fd !== "number" || fd < 0) return "UNKNOWN"
    if (Deno.isatty?.(fd)) return "TTY"
    try {
        const fileInfo = Deno.fstatSync?.(fd)
        if (Deno.build.os !== "windows") {
            switch (fileInfo.mode & fs.S_IFMT) {
                case fs.S_IFREG:
                case fs.S_IFCHR:
                    return "FILE"
                case fs.S_IFIFO:
                    return "PIPE"
                case fs.S_IFSOCK:
                    return "TCP"
                default:
                    return "UNKNOWN"
            }
        }
        if (fileInfo.isFile) {
            if (fileInfo.birthtime.valueOf() === 11644473600000) return "PIPE"
            return "FILE"
        }
    } catch (e) {
        if (Deno.build.os === "windows" && e.code === "EISDIR") return "FILE"
    }
    return "UNKNOWN"
}
const _read = function (size) {
    const p = Buffer.alloc(size || 16 * 1024)
    Deno.stdin?.read(p).then(
        (length) => {
            this.push(length === null ? null : p.slice(0, length))
        },
        (error) => {
            this.destroy(error)
        }
    )
}
const stdin = (stdio.stdin = (() => {
    const fd = Deno.stdin?.rid
    let _stdin
    const stdinType = _guessStdinType(fd)
    switch (stdinType) {
        case "FILE": {
            _stdin = new Au({
                highWaterMark: 64 * 1024,
                autoDestroy: false,
                read: _read,
            })
            break
        }
        case "TTY":
        case "PIPE":
        case "TCP": {
            _stdin = new Tu({
                readable: stdinType === "TTY" ? undefined : true,
                writable: stdinType === "TTY" ? undefined : false,
                readableHighWaterMark: stdinType === "TTY" ? 0 : undefined,
                allowHalfOpen: false,
                emitClose: false,
                autoDestroy: true,
                decodeStrings: false,
                read: _read,
            })
            if (stdinType !== "TTY") {
                _stdin._writableState.ended = true
            }
            break
        }
        default: {
            _stdin = new Au({
                read() {},
            })
            _stdin.push(null)
        }
    }
    return _stdin
})())
stdin.on("close", () => Deno.stdin?.close())
stdin.fd = Deno.stdin?.rid ?? -1
Object.defineProperty(stdin, "isTTY", {
    enumerable: true,
    configurable: true,
    get() {
        return Deno.isatty?.(Deno.stdin.rid)
    },
})
stdin._isRawMode = false
stdin.setRawMode = (enable) => {
    Deno.stdin?.setRaw?.(enable)
    stdin._isRawMode = enable
    return stdin
}
Object.defineProperty(stdin, "isRaw", {
    enumerable: true,
    configurable: true,
    get() {
        return stdin._isRawMode
    },
})
function registerDestroyHook(_target, _asyncId, _prop) {}
var constants1
;(function (constants) {
    constants[(constants["kInit"] = 0)] = "kInit"
    constants[(constants["kBefore"] = 1)] = "kBefore"
    constants[(constants["kAfter"] = 2)] = "kAfter"
    constants[(constants["kDestroy"] = 3)] = "kDestroy"
    constants[(constants["kPromiseResolve"] = 4)] = "kPromiseResolve"
    constants[(constants["kTotals"] = 5)] = "kTotals"
    constants[(constants["kCheck"] = 6)] = "kCheck"
    constants[(constants["kExecutionAsyncId"] = 7)] = "kExecutionAsyncId"
    constants[(constants["kTriggerAsyncId"] = 8)] = "kTriggerAsyncId"
    constants[(constants["kAsyncIdCounter"] = 9)] = "kAsyncIdCounter"
    constants[(constants["kDefaultTriggerAsyncId"] = 10)] = "kDefaultTriggerAsyncId"
    constants[(constants["kUsesExecutionAsyncResource"] = 11)] = "kUsesExecutionAsyncResource"
    constants[(constants["kStackLength"] = 12)] = "kStackLength"
})(constants1 || (constants1 = {}))
const asyncHookFields = new Uint32Array(Object.keys(constants1).length)
function newAsyncId() {
    return ++asyncIdFields[constants1.kAsyncIdCounter]
}
var UidFields
;(function (UidFields) {
    UidFields[(UidFields["kExecutionAsyncId"] = 0)] = "kExecutionAsyncId"
    UidFields[(UidFields["kTriggerAsyncId"] = 1)] = "kTriggerAsyncId"
    UidFields[(UidFields["kAsyncIdCounter"] = 2)] = "kAsyncIdCounter"
    UidFields[(UidFields["kDefaultTriggerAsyncId"] = 3)] = "kDefaultTriggerAsyncId"
    UidFields[(UidFields["kUidFieldsCount"] = 4)] = "kUidFieldsCount"
})(UidFields || (UidFields = {}))
const asyncIdFields = new Float64Array(Object.keys(UidFields).length)
asyncIdFields[UidFields.kAsyncIdCounter] = 1
asyncIdFields[UidFields.kDefaultTriggerAsyncId] = -1
var providerType
;(function (providerType) {
    providerType[(providerType["NONE"] = 0)] = "NONE"
    providerType[(providerType["DIRHANDLE"] = 1)] = "DIRHANDLE"
    providerType[(providerType["DNSCHANNEL"] = 2)] = "DNSCHANNEL"
    providerType[(providerType["ELDHISTOGRAM"] = 3)] = "ELDHISTOGRAM"
    providerType[(providerType["FILEHANDLE"] = 4)] = "FILEHANDLE"
    providerType[(providerType["FILEHANDLECLOSEREQ"] = 5)] = "FILEHANDLECLOSEREQ"
    providerType[(providerType["FIXEDSIZEBLOBCOPY"] = 6)] = "FIXEDSIZEBLOBCOPY"
    providerType[(providerType["FSEVENTWRAP"] = 7)] = "FSEVENTWRAP"
    providerType[(providerType["FSREQCALLBACK"] = 8)] = "FSREQCALLBACK"
    providerType[(providerType["FSREQPROMISE"] = 9)] = "FSREQPROMISE"
    providerType[(providerType["GETADDRINFOREQWRAP"] = 10)] = "GETADDRINFOREQWRAP"
    providerType[(providerType["GETNAMEINFOREQWRAP"] = 11)] = "GETNAMEINFOREQWRAP"
    providerType[(providerType["HEAPSNAPSHOT"] = 12)] = "HEAPSNAPSHOT"
    providerType[(providerType["HTTP2SESSION"] = 13)] = "HTTP2SESSION"
    providerType[(providerType["HTTP2STREAM"] = 14)] = "HTTP2STREAM"
    providerType[(providerType["HTTP2PING"] = 15)] = "HTTP2PING"
    providerType[(providerType["HTTP2SETTINGS"] = 16)] = "HTTP2SETTINGS"
    providerType[(providerType["HTTPINCOMINGMESSAGE"] = 17)] = "HTTPINCOMINGMESSAGE"
    providerType[(providerType["HTTPCLIENTREQUEST"] = 18)] = "HTTPCLIENTREQUEST"
    providerType[(providerType["JSSTREAM"] = 19)] = "JSSTREAM"
    providerType[(providerType["JSUDPWRAP"] = 20)] = "JSUDPWRAP"
    providerType[(providerType["MESSAGEPORT"] = 21)] = "MESSAGEPORT"
    providerType[(providerType["PIPECONNECTWRAP"] = 22)] = "PIPECONNECTWRAP"
    providerType[(providerType["PIPESERVERWRAP"] = 23)] = "PIPESERVERWRAP"
    providerType[(providerType["PIPEWRAP"] = 24)] = "PIPEWRAP"
    providerType[(providerType["PROCESSWRAP"] = 25)] = "PROCESSWRAP"
    providerType[(providerType["PROMISE"] = 26)] = "PROMISE"
    providerType[(providerType["QUERYWRAP"] = 27)] = "QUERYWRAP"
    providerType[(providerType["SHUTDOWNWRAP"] = 28)] = "SHUTDOWNWRAP"
    providerType[(providerType["SIGNALWRAP"] = 29)] = "SIGNALWRAP"
    providerType[(providerType["STATWATCHER"] = 30)] = "STATWATCHER"
    providerType[(providerType["STREAMPIPE"] = 31)] = "STREAMPIPE"
    providerType[(providerType["TCPCONNECTWRAP"] = 32)] = "TCPCONNECTWRAP"
    providerType[(providerType["TCPSERVERWRAP"] = 33)] = "TCPSERVERWRAP"
    providerType[(providerType["TCPWRAP"] = 34)] = "TCPWRAP"
    providerType[(providerType["TTYWRAP"] = 35)] = "TTYWRAP"
    providerType[(providerType["UDPSENDWRAP"] = 36)] = "UDPSENDWRAP"
    providerType[(providerType["UDPWRAP"] = 37)] = "UDPWRAP"
    providerType[(providerType["SIGINTWATCHDOG"] = 38)] = "SIGINTWATCHDOG"
    providerType[(providerType["WORKER"] = 39)] = "WORKER"
    providerType[(providerType["WORKERHEAPSNAPSHOT"] = 40)] = "WORKERHEAPSNAPSHOT"
    providerType[(providerType["WRITEWRAP"] = 41)] = "WRITEWRAP"
    providerType[(providerType["ZLIB"] = 42)] = "ZLIB"
})(providerType || (providerType = {}))
const kInvalidAsyncId = -1
class AsyncWrap {
    provider = providerType.NONE
    asyncId = kInvalidAsyncId
    constructor(provider) {
        this.provider = provider
        this.getAsyncId()
    }
    getAsyncId() {
        this.asyncId = this.asyncId === kInvalidAsyncId ? newAsyncId() : this.asyncId
        return this.asyncId
    }
    getProviderType() {
        return this.provider
    }
}
const mod8 = {
    async_hook_fields: asyncHookFields,
    asyncIdFields: asyncIdFields,
    registerDestroyHook: registerDestroyHook,
    constants: constants1,
    newAsyncId: newAsyncId,
    UidFields: UidFields,
    providerType: providerType,
    AsyncWrap: AsyncWrap,
}
const mod9 = {}
const v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])"
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`
const IPv4Reg = new RegExp(`^${v4Str}$`)
const v6Seg = "(?:[0-9a-fA-F]{1,4})"
const IPv6Reg = new RegExp("^(" + `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` + `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` + `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` + `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` + `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` + `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` + `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` + `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` + ")(%[0-9a-zA-Z-.:]{1,})?$")
function isIPv4(ip) {
    return RegExp.prototype.test.call(IPv4Reg, ip)
}
function isIPv6(ip) {
    return RegExp.prototype.test.call(IPv6Reg, ip)
}
function isIP(ip) {
    if (isIPv4(ip)) {
        return 4
    }
    if (isIPv6(ip)) {
        return 6
    }
    return 0
}
Symbol("normalizedArgs")
function ares_strerror(code) {
    const errorText = ["Successful completion", "DNS server returned answer with no data", "DNS server claims query was misformatted", "DNS server returned general failure", "Domain name not found", "DNS server does not implement requested operation", "DNS server refused query", "Misformatted DNS query", "Misformatted domain name", "Unsupported address family", "Misformatted DNS reply", "Could not contact DNS servers", "Timeout while contacting DNS servers", "End of file", "Error reading file", "Out of memory", "Channel is being destroyed", "Misformatted string", "Illegal flags specified", "Given hostname is not numeric", "Illegal hints flags specified", "c-ares library initialization not yet performed", "Error loading iphlpapi.dll", "Could not find GetNetworkParams function", "DNS query cancelled"]
    if (code >= 0 && code < errorText.length) {
        return errorText[code]
    } else {
        return "unknown"
    }
}
class GetAddrInfoReqWrap extends AsyncWrap {
    family
    hostname
    callback
    resolve
    reject
    oncomplete
    constructor() {
        super(providerType.GETADDRINFOREQWRAP)
    }
}
function getaddrinfo(req, hostname, family, _hints, verbatim) {
    let addresses = []
    const recordTypes = []
    if (family === 0 || family === 4) {
        recordTypes.push("A")
    }
    if (family === 0 || family === 6) {
        recordTypes.push("AAAA")
    }
    ;(async () => {
        await Promise.allSettled(
            recordTypes.map((recordType) =>
                Deno.resolveDns(hostname, recordType).then((records) => {
                    records.forEach((record) => addresses.push(record))
                })
            )
        )
        const error = addresses.length ? 0 : codeMap.get("EAI_NODATA")
        if (!verbatim) {
            addresses.sort((a, b) => {
                if (isIPv4(a)) {
                    return -1
                } else if (isIPv4(b)) {
                    return 1
                }
                return 0
            })
        }
        if (isWindows && hostname === "localhost") {
            addresses = addresses.filter((address) => isIPv4(address))
        }
        req.oncomplete(error, addresses)
    })()
    return 0
}
class QueryReqWrap extends AsyncWrap {
    bindingName
    hostname
    ttl
    callback
    resolve
    reject
    oncomplete
    constructor() {
        super(providerType.QUERYWRAP)
    }
}
function fqdnToHostname(fqdn) {
    return fqdn.replace(/\.$/, "")
}
function compressIPv6(address) {
    const formatted = address.replace(/\b(?:0+:){2,}/, ":")
    const finalAddress = formatted
        .split(":")
        .map((octet) => {
            if (octet.match(/^\d+\.\d+\.\d+\.\d+$/)) {
                return Number(octet.replaceAll(".", "")).toString(16)
            }
            return octet.replace(/\b0+/g, "")
        })
        .join(":")
    return finalAddress
}
class ChannelWrap extends AsyncWrap {
    #servers = []
    #timeout
    #tries
    constructor(timeout, tries) {
        super(providerType.DNSCHANNEL)
        this.#timeout = timeout
        this.#tries = tries
    }
    async #query(query, recordType) {
        let code
        let ret
        if (this.#servers.length) {
            for (const [ipAddr, port] of this.#servers) {
                const resolveOptions = {
                    nameServer: {
                        ipAddr,
                        port,
                    },
                }
                ;({ code, ret } = await this.#resolve(query, recordType, resolveOptions))
                if (code === 0 || code === codeMap.get("EAI_NODATA")) {
                    break
                }
            }
        } else {
            ;({ code, ret } = await this.#resolve(query, recordType))
        }
        return {
            code: code,
            ret: ret,
        }
    }
    async #resolve(query, recordType, resolveOptions) {
        let ret = []
        let code = 0
        try {
            ret = await Deno.resolveDns(query, recordType, resolveOptions)
        } catch (e) {
            if (e instanceof Deno.errors.NotFound) {
                code = codeMap.get("EAI_NODATA")
            } else {
                code = codeMap.get("UNKNOWN")
            }
        }
        return {
            code,
            ret,
        }
    }
    queryAny(req, name) {
        ;(async () => {
            const records = []
            await Promise.allSettled([
                this.#query(name, "A").then(({ ret }) => {
                    ret.forEach((record) =>
                        records.push({
                            type: "A",
                            address: record,
                        })
                    )
                }),
                this.#query(name, "AAAA").then(({ ret }) => {
                    ret.forEach((record) =>
                        records.push({
                            type: "AAAA",
                            address: compressIPv6(record),
                        })
                    )
                }),
                this.#query(name, "CAA").then(({ ret }) => {
                    ret.forEach(({ critical, tag, value }) =>
                        records.push({
                            type: "CAA",
                            [tag]: value,
                            critical: +critical && 128,
                        })
                    )
                }),
                this.#query(name, "CNAME").then(({ ret }) => {
                    ret.forEach((record) =>
                        records.push({
                            type: "CNAME",
                            value: record,
                        })
                    )
                }),
                this.#query(name, "MX").then(({ ret }) => {
                    ret.forEach(({ preference, exchange }) =>
                        records.push({
                            type: "MX",
                            priority: preference,
                            exchange: fqdnToHostname(exchange),
                        })
                    )
                }),
                this.#query(name, "NAPTR").then(({ ret }) => {
                    ret.forEach(({ order, preference, flags, services, regexp, replacement }) =>
                        records.push({
                            type: "NAPTR",
                            order,
                            preference,
                            flags,
                            service: services,
                            regexp,
                            replacement,
                        })
                    )
                }),
                this.#query(name, "NS").then(({ ret }) => {
                    ret.forEach((record) =>
                        records.push({
                            type: "NS",
                            value: fqdnToHostname(record),
                        })
                    )
                }),
                this.#query(name, "PTR").then(({ ret }) => {
                    ret.forEach((record) =>
                        records.push({
                            type: "PTR",
                            value: fqdnToHostname(record),
                        })
                    )
                }),
                this.#query(name, "SOA").then(({ ret }) => {
                    ret.forEach(({ mname, rname, serial, refresh, retry, expire, minimum }) =>
                        records.push({
                            type: "SOA",
                            nsname: fqdnToHostname(mname),
                            hostmaster: fqdnToHostname(rname),
                            serial,
                            refresh,
                            retry,
                            expire,
                            minttl: minimum,
                        })
                    )
                }),
                this.#query(name, "SRV").then(({ ret }) => {
                    ret.forEach(({ priority, weight, port, target }) =>
                        records.push({
                            type: "SRV",
                            priority,
                            weight,
                            port,
                            name: target,
                        })
                    )
                }),
                this.#query(name, "TXT").then(({ ret }) => {
                    ret.forEach((record) =>
                        records.push({
                            type: "TXT",
                            entries: record,
                        })
                    )
                }),
            ])
            const err = records.length ? 0 : codeMap.get("EAI_NODATA")
            req.oncomplete(err, records)
        })()
        return 0
    }
    queryA(req, name) {
        this.#query(name, "A").then(({ code, ret }) => {
            req.oncomplete(code, ret)
        })
        return 0
    }
    queryAaaa(req, name) {
        this.#query(name, "AAAA").then(({ code, ret }) => {
            const records = ret.map((record) => compressIPv6(record))
            req.oncomplete(code, records)
        })
        return 0
    }
    queryCaa(req, name) {
        this.#query(name, "CAA").then(({ code, ret }) => {
            const records = ret.map(({ critical, tag, value }) => ({
                [tag]: value,
                critical: +critical && 128,
            }))
            req.oncomplete(code, records)
        })
        return 0
    }
    queryCname(req, name) {
        this.#query(name, "CNAME").then(({ code, ret }) => {
            req.oncomplete(code, ret)
        })
        return 0
    }
    queryMx(req, name) {
        this.#query(name, "MX").then(({ code, ret }) => {
            const records = ret.map(({ preference, exchange }) => ({
                priority: preference,
                exchange: fqdnToHostname(exchange),
            }))
            req.oncomplete(code, records)
        })
        return 0
    }
    queryNaptr(req, name) {
        this.#query(name, "NAPTR").then(({ code, ret }) => {
            const records = ret.map(({ order, preference, flags, services, regexp, replacement }) => ({
                flags,
                service: services,
                regexp,
                replacement,
                order,
                preference,
            }))
            req.oncomplete(code, records)
        })
        return 0
    }
    queryNs(req, name) {
        this.#query(name, "NS").then(({ code, ret }) => {
            const records = ret.map((record) => fqdnToHostname(record))
            req.oncomplete(code, records)
        })
        return 0
    }
    queryPtr(req, name) {
        this.#query(name, "PTR").then(({ code, ret }) => {
            const records = ret.map((record) => fqdnToHostname(record))
            req.oncomplete(code, records)
        })
        return 0
    }
    querySoa(req, name) {
        this.#query(name, "SOA").then(({ code, ret }) => {
            let record = {}
            if (ret.length) {
                const { mname, rname, serial, refresh, retry, expire, minimum } = ret[0]
                record = {
                    nsname: fqdnToHostname(mname),
                    hostmaster: fqdnToHostname(rname),
                    serial,
                    refresh,
                    retry,
                    expire,
                    minttl: minimum,
                }
            }
            req.oncomplete(code, record)
        })
        return 0
    }
    querySrv(req, name) {
        this.#query(name, "SRV").then(({ code, ret }) => {
            const records = ret.map(({ priority, weight, port, target }) => ({
                priority,
                weight,
                port,
                name: target,
            }))
            req.oncomplete(code, records)
        })
        return 0
    }
    queryTxt(req, name) {
        this.#query(name, "TXT").then(({ code, ret }) => {
            req.oncomplete(code, ret)
        })
        return 0
    }
    getHostByAddr(_req, _name) {
        notImplemented("cares.ChannelWrap.prototype.getHostByAddr")
    }
    getServers() {
        return this.#servers
    }
    setServers(servers) {
        if (typeof servers === "string") {
            const tuples = []
            for (let i = 0; i < servers.length; i += 2) {
                tuples.push([servers[i], parseInt(servers[i + 1])])
            }
            this.#servers = tuples
        } else {
            this.#servers = servers.map(([_ipVersion, ip, port]) => [ip, port])
        }
        return 0
    }
    setLocalAddress(_addr0, _addr1) {
        notImplemented("cares.ChannelWrap.prototype.setLocalAddress")
    }
    cancel() {
        notImplemented("cares.ChannelWrap.prototype.cancel")
    }
}
const DNS_ESETSRVPENDING = -1000
const EMSG_ESETSRVPENDING = "There are pending queries."
function strerror(code) {
    return code === DNS_ESETSRVPENDING ? EMSG_ESETSRVPENDING : ares_strerror(code)
}
const mod10 = {
    GetAddrInfoReqWrap: GetAddrInfoReqWrap,
    getaddrinfo: getaddrinfo,
    QueryReqWrap: QueryReqWrap,
    ChannelWrap: ChannelWrap,
    strerror: strerror,
}
const mod11 = {}
function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false
    }
    if (!(a instanceof DataView)) {
        a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a)
    }
    if (!(b instanceof DataView)) {
        b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b)
    }
    assert(a instanceof DataView)
    assert(b instanceof DataView)
    const length = a.byteLength
    let out = 0
    let i = -1
    while (++i < length) {
        out |= a.getUint8(i) ^ b.getUint8(i)
    }
    return out === 0
}
const timingSafeEqual1 = (a, b) => {
    if (a instanceof Buffer) a = new DataView(a.buffer)
    if (a instanceof Buffer) b = new DataView(a.buffer)
    return timingSafeEqual(a, b)
}
function getFipsCrypto() {
    notImplemented("crypto.getFipsCrypto")
}
function setFipsCrypto(_fips) {
    notImplemented("crypto.setFipsCrypto")
}
const mod12 = {
    timingSafeEqual: timingSafeEqual1,
    getFipsCrypto: getFipsCrypto,
    setFipsCrypto: setFipsCrypto,
}
const mod13 = {}
const mod14 = {}
const mod15 = {}
const mod16 = {}
const mod17 = {}
const mod18 = {}
const mod19 = {}
const mod20 = {}
const mod21 = {}
const mod22 = {}
const mod23 = {}
const mod24 = {}
const mod25 = {}
const mod26 = {}
const mod27 = {}
const mod28 = {}
class HandleWrap extends AsyncWrap {
    constructor(provider) {
        super(provider)
    }
    close(cb = () => {}) {
        this._onClose()
        queueMicrotask(cb)
    }
    ref() {
        unreachable()
    }
    unref() {
        unreachable()
    }
    _onClose() {}
}
async function writeAll(w, arr) {
    let nwritten = 0
    while (nwritten < arr.length) {
        nwritten += await w.write(arr.subarray(nwritten))
    }
}
var StreamBaseStateFields
;(function (StreamBaseStateFields) {
    StreamBaseStateFields[(StreamBaseStateFields["kReadBytesOrError"] = 0)] = "kReadBytesOrError"
    StreamBaseStateFields[(StreamBaseStateFields["kArrayBufferOffset"] = 1)] = "kArrayBufferOffset"
    StreamBaseStateFields[(StreamBaseStateFields["kBytesWritten"] = 2)] = "kBytesWritten"
    StreamBaseStateFields[(StreamBaseStateFields["kLastWriteWasAsync"] = 3)] = "kLastWriteWasAsync"
    StreamBaseStateFields[(StreamBaseStateFields["kNumStreamBaseStateFields"] = 4)] = "kNumStreamBaseStateFields"
})(StreamBaseStateFields || (StreamBaseStateFields = {}))
const kReadBytesOrError = StreamBaseStateFields.kReadBytesOrError
const kArrayBufferOffset = StreamBaseStateFields.kArrayBufferOffset
const kBytesWritten = StreamBaseStateFields.kBytesWritten
const kLastWriteWasAsync = StreamBaseStateFields.kLastWriteWasAsync
const kNumStreamBaseStateFields = StreamBaseStateFields.kNumStreamBaseStateFields
const streamBaseState = new Uint8Array(5)
streamBaseState[kLastWriteWasAsync] = 1
class WriteWrap extends AsyncWrap {
    handle
    oncomplete
    async
    bytes
    buffer
    callback
    _chunks
    constructor() {
        super(providerType.WRITEWRAP)
    }
}
class ShutdownWrap extends AsyncWrap {
    handle
    oncomplete
    callback
    constructor() {
        super(providerType.SHUTDOWNWRAP)
    }
}
const kStreamBaseField = Symbol("kStreamBaseField")
const SUGGESTED_SIZE = 64 * 1024
class LibuvStreamWrap extends HandleWrap {
    [kStreamBaseField]
    reading
    #reading = false
    destroyed = false
    writeQueueSize = 0
    bytesRead = 0
    bytesWritten = 0
    onread
    constructor(provider, stream) {
        super(provider)
        this.#attachToObject(stream)
    }
    readStart() {
        if (!this.#reading) {
            this.#reading = true
            this.#read()
        }
        return 0
    }
    readStop() {
        this.#reading = false
        return 0
    }
    shutdown(req) {
        const status = this._onClose()
        try {
            req.oncomplete(status)
        } catch {}
        return 0
    }
    useUserBuffer(_userBuf) {
        notImplemented("LibuvStreamWrap.prototype.useUserBuffer")
    }
    writeBuffer(req, data) {
        this.#write(req, data)
        return 0
    }
    writev(req, chunks, allBuffers) {
        const count = allBuffers ? chunks.length : chunks.length >> 1
        const buffers = new Array(count)
        if (!allBuffers) {
            for (let i = 0; i < count; i++) {
                const chunk = chunks[i * 2]
                if (Buffer.isBuffer(chunk)) {
                    buffers[i] = chunk
                }
                const encoding = chunks[i * 2 + 1]
                buffers[i] = Buffer.from(chunk, encoding)
            }
        } else {
            for (let i = 0; i < count; i++) {
                buffers[i] = chunks[i]
            }
        }
        return this.writeBuffer(req, Buffer.concat(buffers))
    }
    writeAsciiString(req, data) {
        const buffer = new TextEncoder().encode(data)
        return this.writeBuffer(req, buffer)
    }
    writeUtf8String(req, data) {
        const buffer = new TextEncoder().encode(data)
        return this.writeBuffer(req, buffer)
    }
    writeUcs2String(_req, _data) {
        notImplemented("LibuvStreamWrap.prototype.writeUcs2String")
    }
    writeLatin1String(req, data) {
        const buffer = Buffer.from(data, "latin1")
        return this.writeBuffer(req, buffer)
    }
    _onClose() {
        let status = 0
        this.#reading = false
        try {
            this[kStreamBaseField]?.close()
        } catch {
            status = codeMap.get("ENOTCONN")
        }
        return status
    }
    #attachToObject(stream) {
        this[kStreamBaseField] = stream
    }
    async #read() {
        let buf = new Uint8Array(SUGGESTED_SIZE)
        let nread
        try {
            nread = await this[kStreamBaseField].read(buf)
        } catch (e) {
            if (e instanceof Deno.errors.Interrupted || e instanceof Deno.errors.BadResource) {
                nread = codeMap.get("EOF")
            } else if (e instanceof Deno.errors.ConnectionReset || e instanceof Deno.errors.ConnectionAborted) {
                nread = codeMap.get("ECONNRESET")
            } else {
                nread = codeMap.get("UNKNOWN")
            }
            buf = new Uint8Array(0)
        }
        nread ??= codeMap.get("EOF")
        streamBaseState[kReadBytesOrError] = nread
        if (nread > 0) {
            this.bytesRead += nread
        }
        buf = buf.slice(0, nread)
        streamBaseState[kArrayBufferOffset] = 0
        try {
            this.onread(buf, nread)
        } catch {}
        if (nread >= 0 && this.#reading) {
            this.#read()
        }
    }
    async #write(req, data) {
        const { byteLength } = data
        try {
            await writeAll(this[kStreamBaseField], data)
        } catch (e) {
            let status
            if (e instanceof Deno.errors.BadResource || e instanceof Deno.errors.BrokenPipe) {
                status = codeMap.get("EBADF")
            } else {
                status = codeMap.get("UNKNOWN")
            }
            try {
                req.oncomplete(status)
            } catch {}
            return
        }
        streamBaseState[kBytesWritten] = byteLength
        this.bytesWritten += byteLength
        try {
            req.oncomplete(0)
        } catch {}
        return
    }
}
const mod29 = {
    kReadBytesOrError: kReadBytesOrError,
    kArrayBufferOffset: kArrayBufferOffset,
    kBytesWritten: kBytesWritten,
    kLastWriteWasAsync: kLastWriteWasAsync,
    kNumStreamBaseStateFields: kNumStreamBaseStateFields,
    streamBaseState: streamBaseState,
    WriteWrap: WriteWrap,
    ShutdownWrap: ShutdownWrap,
    kStreamBaseField: kStreamBaseField,
    LibuvStreamWrap: LibuvStreamWrap,
}
class ConnectionWrap extends LibuvStreamWrap {
    onconnection = null
    constructor(provider, object) {
        super(provider, object)
    }
    afterConnect(req, status) {
        const isSuccessStatus = !status
        const readable = isSuccessStatus
        const writable = isSuccessStatus
        try {
            req.oncomplete(status, this, req, readable, writable)
        } catch {}
        return
    }
}
function deferred() {
    let methods
    let state = "pending"
    const promise = new Promise((resolve, reject) => {
        methods = {
            async resolve(value) {
                await value
                state = "fulfilled"
                resolve(value)
            },
            reject(reason) {
                state = "rejected"
                reject(reason)
            },
        }
    })
    Object.defineProperty(promise, "state", {
        get: () => state,
    })
    return Object.assign(promise, methods)
}
function delay(ms, options = {}) {
    const { signal, persistent } = options
    if (signal?.aborted) {
        return Promise.reject(new DOMException("Delay was aborted.", "AbortError"))
    }
    return new Promise((resolve, reject) => {
        const abort = () => {
            clearTimeout(i)
            reject(new DOMException("Delay was aborted.", "AbortError"))
        }
        const done = () => {
            signal?.removeEventListener("abort", abort)
            resolve()
        }
        const i = setTimeout(done, ms)
        signal?.addEventListener("abort", abort, {
            once: true,
        })
        if (persistent === false) {
            try {
                Deno.unrefTimer(i)
            } catch (error) {
                if (!(error instanceof ReferenceError)) {
                    throw error
                }
                console.error("`persistent` option is only available in Deno")
            }
        }
    })
}
class MuxAsyncIterator {
    #iteratorCount = 0
    #yields = []
    #throws = []
    #signal = deferred()
    add(iterable) {
        ++this.#iteratorCount
        this.#callIteratorNext(iterable[Symbol.asyncIterator]())
    }
    async #callIteratorNext(iterator) {
        try {
            const { value, done } = await iterator.next()
            if (done) {
                --this.#iteratorCount
            } else {
                this.#yields.push({
                    iterator,
                    value,
                })
            }
        } catch (e) {
            this.#throws.push(e)
        }
        this.#signal.resolve()
    }
    async *iterate() {
        while (this.#iteratorCount > 0) {
            await this.#signal
            for (let i = 0; i < this.#yields.length; i++) {
                const { iterator, value } = this.#yields[i]
                yield value
                this.#callIteratorNext(iterator)
            }
            if (this.#throws.length) {
                for (const e of this.#throws) {
                    throw e
                }
                this.#throws.length = 0
            }
            this.#yields.length = 0
            this.#signal = deferred()
        }
    }
    [Symbol.asyncIterator]() {
        return this.iterate()
    }
}
function ceilPowOf2(n) {
    const roundPowOf2 = 1 << (31 - Math.clz32(n))
    return roundPowOf2 < n ? roundPowOf2 * 2 : roundPowOf2
}
const INITIAL_ACCEPT_BACKOFF_DELAY = 5
const MAX_ACCEPT_BACKOFF_DELAY = 1000
var socketType
;(function (socketType) {
    socketType[(socketType["SOCKET"] = 0)] = "SOCKET"
    socketType[(socketType["SERVER"] = 1)] = "SERVER"
    socketType[(socketType["IPC"] = 2)] = "IPC"
})(socketType || (socketType = {}))
class Pipe extends ConnectionWrap {
    reading = false
    ipc
    #pendingInstances = 4
    #address
    #backlog
    #listener
    #connections = 0
    #closed = false
    #acceptBackoffDelay
    constructor(type, conn) {
        let provider
        let ipc
        switch (type) {
            case socketType.SOCKET: {
                provider = providerType.PIPEWRAP
                ipc = false
                break
            }
            case socketType.SERVER: {
                provider = providerType.PIPESERVERWRAP
                ipc = false
                break
            }
            case socketType.IPC: {
                provider = providerType.PIPEWRAP
                ipc = true
                break
            }
            default: {
                unreachable()
            }
        }
        super(provider, conn)
        this.ipc = ipc
        if (conn && provider === providerType.PIPEWRAP) {
            const localAddr = conn.localAddr
            this.#address = localAddr.path
        }
    }
    open(_fd) {
        notImplemented("Pipe.prototype.open")
    }
    bind(name) {
        this.#address = name
        return 0
    }
    connect(req, address) {
        if (isWindows) {
            notImplemented("Pipe.prototype.connect - Windows")
        }
        const connectOptions = {
            path: address,
            transport: "unix",
        }
        Deno.connect(connectOptions).then(
            (conn) => {
                const localAddr = conn.localAddr
                this.#address = req.address = localAddr.path
                this[kStreamBaseField] = conn
                try {
                    this.afterConnect(req, 0)
                } catch {}
            },
            (e) => {
                let code
                if (e instanceof Deno.errors.NotFound) {
                    code = codeMap.get("ENOENT")
                } else if (e instanceof Deno.errors.PermissionDenied) {
                    code = codeMap.get("EACCES")
                } else {
                    code = codeMap.get("ECONNREFUSED")
                }
                try {
                    this.afterConnect(req, code)
                } catch {}
            }
        )
        return 0
    }
    listen(backlog) {
        if (isWindows) {
            notImplemented("Pipe.prototype.listen - Windows")
        }
        this.#backlog = isWindows ? this.#pendingInstances : ceilPowOf2(backlog + 1)
        const listenOptions = {
            path: this.#address,
            transport: "unix",
        }
        let listener
        try {
            listener = Deno.listen(listenOptions)
        } catch (e) {
            if (e instanceof Deno.errors.AddrInUse) {
                return codeMap.get("EADDRINUSE")
            } else if (e instanceof Deno.errors.AddrNotAvailable) {
                return codeMap.get("EADDRNOTAVAIL")
            } else if (e instanceof Deno.errors.PermissionDenied) {
                throw e
            }
            return codeMap.get("UNKNOWN")
        }
        const address = listener.addr
        this.#address = address.path
        this.#listener = listener
        this.#accept()
        return 0
    }
    ref() {
        if (this.#listener) {
            this.#listener.ref()
        }
    }
    unref() {
        if (this.#listener) {
            this.#listener.unref()
        }
    }
    setPendingInstances(instances) {
        this.#pendingInstances = instances
    }
    fchmod(mode) {
        if (mode != constants2.UV_READABLE && mode != constants2.UV_WRITABLE && mode != (constants2.UV_WRITABLE | constants2.UV_READABLE)) {
            return codeMap.get("EINVAL")
        }
        let desired_mode = 0
        if (mode & constants2.UV_READABLE) {
            desired_mode |= fs.S_IRUSR | fs.S_IRGRP | fs.S_IROTH
        }
        if (mode & constants2.UV_WRITABLE) {
            desired_mode |= fs.S_IWUSR | fs.S_IWGRP | fs.S_IWOTH
        }
        try {
            Deno.chmodSync(this.#address, desired_mode)
        } catch {
            return codeMap.get("UNKNOWN")
        }
        return 0
    }
    async #acceptBackoff() {
        if (!this.#acceptBackoffDelay) {
            this.#acceptBackoffDelay = INITIAL_ACCEPT_BACKOFF_DELAY
        } else {
            this.#acceptBackoffDelay *= 2
        }
        if (this.#acceptBackoffDelay >= 1000) {
            this.#acceptBackoffDelay = MAX_ACCEPT_BACKOFF_DELAY
        }
        await delay(this.#acceptBackoffDelay)
        this.#accept()
    }
    async #accept() {
        if (this.#closed) {
            return
        }
        if (this.#connections > this.#backlog) {
            this.#acceptBackoff()
            return
        }
        let connection
        try {
            connection = await this.#listener.accept()
        } catch (e) {
            if (e instanceof Deno.errors.BadResource && this.#closed) {
                return
            }
            try {
                this.onconnection(codeMap.get("UNKNOWN"), undefined)
            } catch {}
            this.#acceptBackoff()
            return
        }
        this.#acceptBackoffDelay = undefined
        const connectionHandle = new Pipe(socketType.SOCKET, connection)
        this.#connections++
        try {
            this.onconnection(0, connectionHandle)
        } catch {}
        return this.#accept()
    }
    _onClose() {
        this.#closed = true
        this.reading = false
        this.#address = undefined
        this.#backlog = undefined
        this.#connections = 0
        this.#acceptBackoffDelay = undefined
        if (this.provider === providerType.PIPESERVERWRAP) {
            try {
                this.#listener.close()
            } catch {}
        }
        return LibuvStreamWrap.prototype._onClose.call(this)
    }
}
class PipeConnectWrap extends AsyncWrap {
    oncomplete
    address
    constructor() {
        super(providerType.PIPECONNECTWRAP)
    }
}
var constants2
;(function (constants) {
    constants[(constants["SOCKET"] = socketType.SOCKET)] = "SOCKET"
    constants[(constants["SERVER"] = socketType.SERVER)] = "SERVER"
    constants[(constants["IPC"] = socketType.IPC)] = "IPC"
    constants[(constants["UV_READABLE"] = 1)] = "UV_READABLE"
    constants[(constants["UV_WRITABLE"] = 2)] = "UV_WRITABLE"
})(constants2 || (constants2 = {}))
const mod30 = {
    socketType: socketType,
    Pipe: Pipe,
    PipeConnectWrap: PipeConnectWrap,
    constants: constants2,
}
const mod31 = {}
const mod32 = {}
const mod33 = {}
const mod34 = {}
const mod35 = {}
const mod36 = {}
const asyncIdSymbol = Symbol("asyncIdSymbol")
const ownerSymbol = Symbol("ownerSymbol")
const mod37 = {
    asyncIdSymbol: asyncIdSymbol,
    ownerSymbol: ownerSymbol,
}
const mod38 = {}
var socketType1
;(function (socketType) {
    socketType[(socketType["SOCKET"] = 0)] = "SOCKET"
    socketType[(socketType["SERVER"] = 1)] = "SERVER"
})(socketType1 || (socketType1 = {}))
class TCPConnectWrap extends AsyncWrap {
    oncomplete
    address
    port
    localAddress
    localPort
    constructor() {
        super(providerType.TCPCONNECTWRAP)
    }
}
var constants3
;(function (constants) {
    constants[(constants["SOCKET"] = socketType1.SOCKET)] = "SOCKET"
    constants[(constants["SERVER"] = socketType1.SERVER)] = "SERVER"
    constants[(constants["UV_TCP_IPV6ONLY"] = 0)] = "UV_TCP_IPV6ONLY"
})(constants3 || (constants3 = {}))
class TCP extends ConnectionWrap {
    [ownerSymbol] = null
    reading = false
    #address
    #port
    #remoteAddress
    #remoteFamily
    #remotePort
    #backlog
    #listener
    #connections = 0
    #closed = false
    #acceptBackoffDelay
    constructor(type, conn) {
        let provider
        switch (type) {
            case socketType1.SOCKET: {
                provider = providerType.TCPWRAP
                break
            }
            case socketType1.SERVER: {
                provider = providerType.TCPSERVERWRAP
                break
            }
            default: {
                unreachable()
            }
        }
        super(provider, conn)
        if (conn && provider === providerType.TCPWRAP) {
            const localAddr = conn.localAddr
            this.#address = localAddr.hostname
            this.#port = localAddr.port
            const remoteAddr = conn.remoteAddr
            this.#remoteAddress = remoteAddr.hostname
            this.#remotePort = remoteAddr.port
            this.#remoteFamily = isIP(remoteAddr.hostname)
        }
    }
    open(_fd) {
        notImplemented("TCP.prototype.open")
    }
    bind(address, port) {
        return this.#bind(address, port, 0)
    }
    bind6(address, port, flags) {
        return this.#bind(address, port, flags)
    }
    connect(req, address, port) {
        return this.#connect(req, address, port)
    }
    connect6(req, address, port) {
        return this.#connect(req, address, port)
    }
    listen(backlog) {
        this.#backlog = ceilPowOf2(backlog + 1)
        const listenOptions = {
            hostname: this.#address,
            port: this.#port,
            transport: "tcp",
        }
        let listener
        try {
            listener = Deno.listen(listenOptions)
        } catch (e) {
            if (e instanceof Deno.errors.AddrInUse) {
                return codeMap.get("EADDRINUSE")
            } else if (e instanceof Deno.errors.AddrNotAvailable) {
                return codeMap.get("EADDRNOTAVAIL")
            } else if (e instanceof Deno.errors.PermissionDenied) {
                throw e
            }
            return codeMap.get("UNKNOWN")
        }
        const address = listener.addr
        this.#address = address.hostname
        this.#port = address.port
        this.#listener = listener
        this.#accept()
        return 0
    }
    ref() {
        if (this.#listener) {
            this.#listener.ref()
        }
        if (this[kStreamBaseField]) {
            this[kStreamBaseField].ref()
        }
    }
    unref() {
        if (this.#listener) {
            this.#listener.unref()
        }
        if (this[kStreamBaseField]) {
            this[kStreamBaseField].unref()
        }
    }
    getsockname(sockname) {
        if (typeof this.#address === "undefined" || typeof this.#port === "undefined") {
            return codeMap.get("EADDRNOTAVAIL")
        }
        sockname.address = this.#address
        sockname.port = this.#port
        sockname.family = isIP(this.#address)
        return 0
    }
    getpeername(peername) {
        if (typeof this.#remoteAddress === "undefined" || typeof this.#remotePort === "undefined") {
            return codeMap.get("EADDRNOTAVAIL")
        }
        peername.address = this.#remoteAddress
        peername.port = this.#remotePort
        peername.family = this.#remoteFamily
        return 0
    }
    setNoDelay(_noDelay) {
        return 0
    }
    setKeepAlive(_enable, _initialDelay) {
        return 0
    }
    setSimultaneousAccepts(_enable) {
        notImplemented("TCP.prototype.setSimultaneousAccepts")
    }
    #bind(address, port, _flags) {
        this.#address = address
        this.#port = port
        return 0
    }
    #connect(req, address, port) {
        this.#remoteAddress = address
        this.#remotePort = port
        this.#remoteFamily = isIP(address)
        const connectOptions = {
            hostname: address,
            port,
            transport: "tcp",
        }
        Deno.connect(connectOptions).then(
            (conn) => {
                const localAddr = conn.localAddr
                this.#address = req.localAddress = localAddr.hostname
                this.#port = req.localPort = localAddr.port
                this[kStreamBaseField] = conn
                try {
                    this.afterConnect(req, 0)
                } catch {}
            },
            () => {
                try {
                    this.afterConnect(req, codeMap.get("ECONNREFUSED"))
                } catch {}
            }
        )
        return 0
    }
    async #acceptBackoff() {
        if (!this.#acceptBackoffDelay) {
            this.#acceptBackoffDelay = INITIAL_ACCEPT_BACKOFF_DELAY
        } else {
            this.#acceptBackoffDelay *= 2
        }
        if (this.#acceptBackoffDelay >= 1000) {
            this.#acceptBackoffDelay = MAX_ACCEPT_BACKOFF_DELAY
        }
        await delay(this.#acceptBackoffDelay)
        this.#accept()
    }
    async #accept() {
        if (this.#closed) {
            return
        }
        if (this.#connections > this.#backlog) {
            this.#acceptBackoff()
            return
        }
        let connection
        try {
            connection = await this.#listener.accept()
        } catch (e) {
            if (e instanceof Deno.errors.BadResource && this.#closed) {
                return
            }
            try {
                this.onconnection(codeMap.get("UNKNOWN"), undefined)
            } catch {}
            this.#acceptBackoff()
            return
        }
        this.#acceptBackoffDelay = undefined
        const connectionHandle = new TCP(socketType1.SOCKET, connection)
        this.#connections++
        try {
            this.onconnection(0, connectionHandle)
        } catch {}
        return this.#accept()
    }
    _onClose() {
        this.#closed = true
        this.reading = false
        this.#address = undefined
        this.#port = undefined
        this.#remoteAddress = undefined
        this.#remoteFamily = undefined
        this.#remotePort = undefined
        this.#backlog = undefined
        this.#connections = 0
        this.#acceptBackoffDelay = undefined
        if (this.provider === providerType.TCPSERVERWRAP) {
            try {
                this.#listener.close()
            } catch {}
        }
        return LibuvStreamWrap.prototype._onClose.call(this)
    }
}
const mod39 = {
    TCPConnectWrap: TCPConnectWrap,
    constants: constants3,
    TCP: TCP,
}
const mod40 = {}
const mod41 = {}
const mod42 = {}
const mod43 = {}
const DenoListenDatagram = Deno[Deno.internal]?.nodeUnstable?.listenDatagram || Deno.listenDatagram
const AF_INET6 = 10
const UDP_DGRAM_MAXSIZE = 64 * 1024
class SendWrap extends AsyncWrap {
    list
    address
    port
    callback
    oncomplete
    constructor() {
        super(providerType.UDPSENDWRAP)
    }
}
class UDP extends HandleWrap {
    [ownerSymbol] = null
    #address
    #family
    #port
    #remoteAddress
    #remoteFamily
    #remotePort
    #listener
    #receiving = false
    #recvBufferSize = UDP_DGRAM_MAXSIZE
    #sendBufferSize = UDP_DGRAM_MAXSIZE
    onmessage
    lookup
    constructor() {
        super(providerType.UDPWRAP)
    }
    addMembership(_multicastAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.addMembership")
    }
    addSourceSpecificMembership(_sourceAddress, _groupAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.addSourceSpecificMembership")
    }
    bind(ip, port, flags) {
        return this.#doBind(ip, port, flags, 2)
    }
    bind6(ip, port, flags) {
        return this.#doBind(ip, port, flags, 10)
    }
    bufferSize(size, buffer, ctx) {
        let err
        if (size > UDP_DGRAM_MAXSIZE) {
            err = "EINVAL"
        } else if (!this.#address) {
            err = isWindows ? "ENOTSOCK" : "EBADF"
        }
        if (err) {
            ctx.errno = codeMap.get(err)
            ctx.code = err
            ctx.message = errorMap.get(ctx.errno)[1]
            ctx.syscall = buffer ? "uv_recv_buffer_size" : "uv_send_buffer_size"
            return
        }
        if (size !== 0) {
            size = isLinux ? size * 2 : size
            if (buffer) {
                return (this.#recvBufferSize = size)
            }
            return (this.#sendBufferSize = size)
        }
        return buffer ? this.#recvBufferSize : this.#sendBufferSize
    }
    connect(ip, port) {
        return this.#doConnect(ip, port, 2)
    }
    connect6(ip, port) {
        return this.#doConnect(ip, port, 10)
    }
    disconnect() {
        this.#remoteAddress = undefined
        this.#remotePort = undefined
        this.#remoteFamily = undefined
        return 0
    }
    dropMembership(_multicastAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.dropMembership")
    }
    dropSourceSpecificMembership(_sourceAddress, _groupAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.dropSourceSpecificMembership")
    }
    getpeername(peername) {
        if (this.#remoteAddress === undefined) {
            return codeMap.get("EBADF")
        }
        peername.address = this.#remoteAddress
        peername.port = this.#remotePort
        peername.family = this.#remoteFamily
        return 0
    }
    getsockname(sockname) {
        if (this.#address === undefined) {
            return codeMap.get("EBADF")
        }
        sockname.address = this.#address
        sockname.port = this.#port
        sockname.family = this.#family
        return 0
    }
    open(_fd) {
        notImplemented("udp.UDP.prototype.open")
    }
    recvStart() {
        if (!this.#receiving) {
            this.#receiving = true
            this.#receive()
        }
        return 0
    }
    recvStop() {
        this.#receiving = false
        return 0
    }
    ref() {
        notImplemented("udp.UDP.prototype.ref")
    }
    send(req, bufs, count, ...args) {
        return this.#doSend(req, bufs, count, args, 2)
    }
    send6(req, bufs, count, ...args) {
        return this.#doSend(req, bufs, count, args, 10)
    }
    setBroadcast(_bool) {
        notImplemented("udp.UDP.prototype.setBroadcast")
    }
    setMulticastInterface(_interfaceAddress) {
        notImplemented("udp.UDP.prototype.setMulticastInterface")
    }
    setMulticastLoopback(_bool) {
        notImplemented("udp.UDP.prototype.setMulticastLoopback")
    }
    setMulticastTTL(_ttl) {
        notImplemented("udp.UDP.prototype.setMulticastTTL")
    }
    setTTL(_ttl) {
        notImplemented("udp.UDP.prototype.setTTL")
    }
    unref() {
        notImplemented("udp.UDP.prototype.unref")
    }
    #doBind(ip, port, _flags, family) {
        const listenOptions = {
            port,
            hostname: ip,
            transport: "udp",
        }
        let listener
        try {
            listener = DenoListenDatagram(listenOptions)
        } catch (e) {
            if (e instanceof Deno.errors.AddrInUse) {
                return codeMap.get("EADDRINUSE")
            } else if (e instanceof Deno.errors.AddrNotAvailable) {
                return codeMap.get("EADDRNOTAVAIL")
            } else if (e instanceof Deno.errors.PermissionDenied) {
                throw e
            }
            return codeMap.get("UNKNOWN")
        }
        const address = listener.addr
        this.#address = address.hostname
        this.#port = address.port
        this.#family = family === AF_INET6 ? "IPv6" : "IPv4"
        this.#listener = listener
        return 0
    }
    #doConnect(ip, port, family) {
        this.#remoteAddress = ip
        this.#remotePort = port
        this.#remoteFamily = family === AF_INET6 ? "IPv6" : "IPv4"
        return 0
    }
    #doSend(req, bufs, _count, args, _family) {
        let hasCallback
        if (args.length === 3) {
            this.#remotePort = args[0]
            this.#remoteAddress = args[1]
            hasCallback = args[2]
        } else {
            hasCallback = args[0]
        }
        const addr = {
            hostname: this.#remoteAddress,
            port: this.#remotePort,
            transport: "udp",
        }
        const payload = new Uint8Array(
            Buffer.concat(
                bufs.map((buf) => {
                    if (typeof buf === "string") {
                        return Buffer.from(buf)
                    }
                    return Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
                })
            )
        )
        ;(async () => {
            let sent
            let err = null
            try {
                sent = await this.#listener.send(payload, addr)
            } catch (e) {
                if (e instanceof Deno.errors.BadResource) {
                    err = codeMap.get("EBADF")
                } else if (e instanceof Error && e.message.match(/os error (40|90|10040)/)) {
                    err = codeMap.get("EMSGSIZE")
                } else {
                    err = codeMap.get("UNKNOWN")
                }
                sent = 0
            }
            if (hasCallback) {
                try {
                    req.oncomplete(err, sent)
                } catch {}
            }
        })()
        return 0
    }
    async #receive() {
        if (!this.#receiving) {
            return
        }
        const p = new Uint8Array(this.#recvBufferSize)
        let buf
        let remoteAddr
        let nread
        try {
            ;[buf, remoteAddr] = await this.#listener.receive(p)
            nread = buf.length
        } catch (e) {
            if (e instanceof Deno.errors.Interrupted || e instanceof Deno.errors.BadResource) {
                nread = 0
            } else {
                nread = codeMap.get("UNKNOWN")
            }
            buf = new Uint8Array(0)
            remoteAddr = null
        }
        nread ??= 0
        const rinfo = remoteAddr
            ? {
                  address: remoteAddr.hostname,
                  port: remoteAddr.port,
                  family: isIP(remoteAddr.hostname) === 6 ? "IPv6" : "IPv4",
              }
            : undefined
        try {
            this.onmessage(nread, this, Buffer.from(buf), rinfo)
        } catch {}
        this.#receive()
    }
    _onClose() {
        this.#receiving = false
        this.#address = undefined
        this.#port = undefined
        this.#family = undefined
        try {
            this.#listener.close()
        } catch {}
        this.#listener = undefined
        return 0
    }
}
const mod44 = {
    SendWrap: SendWrap,
    UDP: UDP,
}
const mod45 = {}
const mod46 = {}
const mod47 = {}
const mod48 = {}
const modules = {
    async_wrap: mod8,
    buffer: mod7,
    cares_wrap: mod10,
    config: mod9,
    constants: mod3,
    contextify: mod11,
    credentials: mod13,
    crypto: mod12,
    errors: mod14,
    fs: mod15,
    fs_dir: mod16,
    fs_event_wrap: mod17,
    heap_utils: mod18,
    http_parser: mod19,
    icu: mod20,
    inspector: mod21,
    js_stream: mod22,
    messaging: mod23,
    module_wrap: mod24,
    native_module: mod25,
    natives: mod26,
    options: mod27,
    os: mod28,
    performance: mod31,
    pipe_wrap: mod30,
    process_methods: mod32,
    report: mod33,
    serdes: mod34,
    signal_wrap: mod35,
    spawn_sync: mod36,
    stream_wrap: mod29,
    string_decoder: mod6,
    symbols: mod37,
    task_queue: mod38,
    tcp_wrap: mod39,
    timers: mod40,
    tls_wrap: mod41,
    trace_events: mod42,
    tty_wrap: mod43,
    types: mod1,
    udp_wrap: mod44,
    url: mod45,
    util: mod2,
    uv: mod,
    v8: mod46,
    worker: mod47,
    zlib: mod48,
}
function getBinding(name) {
    const mod = modules[name]
    if (!mod) {
        throw new Error(`No such module: ${name}`)
    }
    return mod
}
const kInternal = Symbol("internal properties")
const replaceUnderscoresRegex = /_/g
const leadingDashesRegex = /^--?/
const trailingValuesRegex = /=.*$/
function buildAllowedFlags() {
    const allowedNodeEnvironmentFlags = ["--track-heap-objects", "--no-track-heap-objects", "--node-snapshot", "--no-node-snapshot", "--require", "--max-old-space-size", "--trace-exit", "--no-trace-exit", "--disallow-code-generation-from-strings", "--experimental-json-modules", "--no-experimental-json-modules", "--interpreted-frames-native-stack", "--inspect-brk", "--no-inspect-brk", "--trace-tls", "--no-trace-tls", "--stack-trace-limit", "--experimental-repl-await", "--no-experimental-repl-await", "--preserve-symlinks", "--no-preserve-symlinks", "--report-uncaught-exception", "--no-report-uncaught-exception", "--experimental-modules", "--no-experimental-modules", "--report-signal", "--jitless", "--inspect-port", "--heapsnapshot-near-heap-limit", "--tls-keylog", "--force-context-aware", "--no-force-context-aware", "--napi-modules", "--abort-on-uncaught-exception", "--diagnostic-dir", "--verify-base-objects", "--no-verify-base-objects", "--unhandled-rejections", "--perf-basic-prof", "--trace-atomics-wait", "--no-trace-atomics-wait", "--deprecation", "--no-deprecation", "--perf-basic-prof-only-functions", "--perf-prof", "--max-http-header-size", "--report-on-signal", "--no-report-on-signal", "--throw-deprecation", "--no-throw-deprecation", "--warnings", "--no-warnings", "--force-fips", "--no-force-fips", "--pending-deprecation", "--no-pending-deprecation", "--input-type", "--tls-max-v1.3", "--no-tls-max-v1.3", "--tls-min-v1.2", "--no-tls-min-v1.2", "--inspect", "--no-inspect", "--heapsnapshot-signal", "--trace-warnings", "--no-trace-warnings", "--trace-event-categories", "--experimental-worker", "--tls-max-v1.2", "--no-tls-max-v1.2", "--perf-prof-unwinding-info", "--preserve-symlinks-main", "--no-preserve-symlinks-main", "--policy-integrity", "--experimental-wasm-modules", "--no-experimental-wasm-modules", "--node-memory-debug", "--inspect-publish-uid", "--tls-min-v1.3", "--no-tls-min-v1.3", "--experimental-specifier-resolution", "--secure-heap", "--tls-min-v1.0", "--no-tls-min-v1.0", "--redirect-warnings", "--experimental-report", "--trace-event-file-pattern", "--trace-uncaught", "--no-trace-uncaught", "--experimental-loader", "--http-parser", "--dns-result-order", "--trace-sigint", "--no-trace-sigint", "--secure-heap-min", "--enable-fips", "--no-enable-fips", "--enable-source-maps", "--no-enable-source-maps", "--insecure-http-parser", "--no-insecure-http-parser", "--use-openssl-ca", "--no-use-openssl-ca", "--tls-cipher-list", "--experimental-top-level-await", "--no-experimental-top-level-await", "--openssl-config", "--icu-data-dir", "--v8-pool-size", "--report-on-fatalerror", "--no-report-on-fatalerror", "--title", "--tls-min-v1.1", "--no-tls-min-v1.1", "--report-filename", "--trace-deprecation", "--no-trace-deprecation", "--report-compact", "--no-report-compact", "--experimental-policy", "--experimental-import-meta-resolve", "--no-experimental-import-meta-resolve", "--zero-fill-buffers", "--no-zero-fill-buffers", "--report-dir", "--use-bundled-ca", "--no-use-bundled-ca", "--experimental-vm-modules", "--no-experimental-vm-modules", "--force-async-hooks-checks", "--no-force-async-hooks-checks", "--frozen-intrinsics", "--no-frozen-intrinsics", "--huge-max-old-generation-size", "--disable-proto", "--debug-arraybuffer-allocations", "--no-debug-arraybuffer-allocations", "--conditions", "--experimental-wasi-unstable-preview1", "--no-experimental-wasi-unstable-preview1", "--trace-sync-io", "--no-trace-sync-io", "--use-largepages", "--experimental-abortcontroller", "--debug-port", "--es-module-specifier-resolution", "--prof-process", "-C", "--loader", "--report-directory", "-r", "--trace-events-enabled"]
    const trimLeadingDashes = (flag) => flag.replace(leadingDashesRegex, "")
    const nodeFlags = allowedNodeEnvironmentFlags.map(trimLeadingDashes)
    class NodeEnvironmentFlagsSet extends Set {
        constructor(array) {
            super()
            this[kInternal] = {
                array,
            }
        }
        add() {
            return this
        }
        delete() {
            return false
        }
        clear() {}
        has(key) {
            if (typeof key === "string") {
                key = key.replace(replaceUnderscoresRegex, "-")
                if (leadingDashesRegex.test(key)) {
                    key = key.replace(trailingValuesRegex, "")
                    return this[kInternal].array.includes(key)
                }
                return nodeFlags.includes(key)
            }
            return false
        }
        entries() {
            this[kInternal].set ??= new Set(this[kInternal].array)
            return this[kInternal].set.entries()
        }
        forEach(callback, thisArg = undefined) {
            this[kInternal].array.forEach((v) => Reflect.apply(callback, thisArg, [v, v, this]))
        }
        get size() {
            return this[kInternal].array.length
        }
        values() {
            this[kInternal].set ??= new Set(this[kInternal].array)
            return this[kInternal].set.values()
        }
    }
    NodeEnvironmentFlagsSet.prototype.keys = NodeEnvironmentFlagsSet.prototype[Symbol.iterator] = NodeEnvironmentFlagsSet.prototype.values
    Object.freeze(NodeEnvironmentFlagsSet.prototype.constructor)
    Object.freeze(NodeEnvironmentFlagsSet.prototype)
    return Object.freeze(new NodeEnvironmentFlagsSet(allowedNodeEnvironmentFlags))
}
const DenoCommand = Deno[Deno.internal]?.nodeUnstable?.Command || Deno.Command
const notImplementedEvents = ["disconnect", "message", "multipleResolves", "rejectionHandled", "worker"]
const argv = ["", "", ...Deno.args]
Object.defineProperty(argv, "0", {
    get: Deno.execPath,
})
Object.defineProperty(argv, "1", {
    get: () => {
        if (Deno.mainModule.startsWith("file:")) {
            return fromFileUrl2(Deno.mainModule)
        } else {
            return join4(Deno.cwd(), "$deno$node.js")
        }
    },
})
const exit = (code) => {
    if (code || code === 0) {
        if (typeof code === "string") {
            const parsedCode = parseInt(code)
            process2.exitCode = isNaN(parsedCode) ? undefined : parsedCode
        } else {
            process2.exitCode = code
        }
    }
    if (!process2._exiting) {
        process2._exiting = true
        process2.emit("exit", process2.exitCode || 0)
    }
    Deno.exit(process2.exitCode || 0)
}
function addReadOnlyProcessAlias(name, option, enumerable = true) {
    const value = getOptionValue(option)
    if (value) {
        Object.defineProperty(process2, name, {
            writable: false,
            configurable: true,
            enumerable,
            value,
        })
    }
}
function createWarningObject(warning, type, code, ctor, detail) {
    assert(typeof warning === "string")
    const warningErr = new Error(warning)
    warningErr.name = String(type || "Warning")
    if (code !== undefined) {
        warningErr.code = code
    }
    if (detail !== undefined) {
        warningErr.detail = detail
    }
    Error.captureStackTrace(warningErr, ctor || process2.emitWarning)
    return warningErr
}
function doEmitWarning(warning) {
    process2.emit("warning", warning)
}
function emitWarning(warning, type, code, ctor) {
    let detail
    if (type !== null && typeof type === "object" && !Array.isArray(type)) {
        ctor = type.ctor
        code = type.code
        if (typeof type.detail === "string") {
            detail = type.detail
        }
        type = type.type || "Warning"
    } else if (typeof type === "function") {
        ctor = type
        code = undefined
        type = "Warning"
    }
    if (type !== undefined) {
        validateString(type, "type")
    }
    if (typeof code === "function") {
        ctor = code
        code = undefined
    } else if (code !== undefined) {
        validateString(code, "code")
    }
    if (typeof warning === "string") {
        warning = createWarningObject(warning, type, code, ctor, detail)
    } else if (!(warning instanceof Error)) {
        throw new ERR_INVALID_ARG_TYPE("warning", ["Error", "string"], warning)
    }
    if (warning.name === "DeprecationWarning") {
        if (process2.noDeprecation) {
            return
        }
        if (process2.throwDeprecation) {
            return process2.nextTick(() => {
                throw warning
            })
        }
    }
    process2.nextTick(doEmitWarning, warning)
}
function hrtime(time) {
    const milli = performance.now()
    const sec = Math.floor(milli / 1000)
    const nano = Math.floor(milli * 1_000_000 - sec * 1_000_000_000)
    if (!time) {
        return [sec, nano]
    }
    const [prevSec, prevNano] = time
    return [sec - prevSec, nano - prevNano]
}
hrtime.bigint = function () {
    const [sec, nano] = hrtime()
    return BigInt(sec) * 1_000_000_000n + BigInt(nano)
}
function memoryUsage() {
    return {
        ...Deno.memoryUsage(),
        arrayBuffers: 0,
    }
}
memoryUsage.rss = function () {
    return memoryUsage().rss
}
function _kill(pid, sig) {
    let errCode
    if (sig === 0) {
        let status
        if (Deno.build.os === "windows") {
            status = new DenoCommand("powershell.exe", {
                args: ["Get-Process", "-pid", pid],
            }).outputSync()
        } else {
            status = new DenoCommand("kill", {
                args: ["-0", pid],
            }).outputSync()
        }
        if (!status.success) {
            errCode = codeMap.get("ESRCH")
        }
    } else {
        const maybeSignal = Object.entries(os.signals).find(([_, numericCode]) => numericCode === sig)
        if (!maybeSignal) {
            errCode = codeMap.get("EINVAL")
        } else {
            try {
                Deno.kill(pid, maybeSignal[0])
            } catch (e) {
                if (e instanceof TypeError) {
                    throw notImplemented(maybeSignal[0])
                }
                throw e
            }
        }
    }
    if (!errCode) {
        return 0
    } else {
        return errCode
    }
}
function kill(pid, sig = "SIGTERM") {
    if (pid != (pid | 0)) {
        throw new ERR_INVALID_ARG_TYPE("pid", "number", pid)
    }
    let err
    if (typeof sig === "number") {
        err = process2._kill(pid, sig)
    } else {
        if (sig in os.signals) {
            err = process2._kill(pid, os.signals[sig])
        } else {
            throw new ERR_UNKNOWN_SIGNAL(sig)
        }
    }
    if (err) {
        throw errnoException(err, "kill")
    }
    return true
}
function uncaughtExceptionHandler(err, origin) {
    process2.emit("uncaughtExceptionMonitor", err, origin)
    process2.emit("uncaughtException", err, origin)
}
let execPath = null
class Process extends EventEmitter {
    constructor() {
        super()
        globalThis.addEventListener("unhandledrejection", (event) => {
            if (process2.listenerCount("unhandledRejection") === 0) {
                if (process2.listenerCount("uncaughtException") === 0) {
                    throw event.reason
                }
                event.preventDefault()
                uncaughtExceptionHandler(event.reason, "unhandledRejection")
                return
            }
            event.preventDefault()
            process2.emit("unhandledRejection", event.reason, event.promise)
        })
        globalThis.addEventListener("error", (event) => {
            if (process2.listenerCount("uncaughtException") > 0) {
                event.preventDefault()
            }
            uncaughtExceptionHandler(event.error, "uncaughtException")
        })
        globalThis.addEventListener("beforeunload", (e) => {
            super.emit("beforeExit", process2.exitCode || 0)
            processTicksAndRejections()
            if (core.eventLoopHasMoreWork()) {
                e.preventDefault()
            }
        })
        globalThis.addEventListener("unload", () => {
            if (!process2._exiting) {
                process2._exiting = true
                super.emit("exit", process2.exitCode || 0)
            }
        })
    }
    arch = arch
    argv = argv
    chdir = chdir
    config = {
        target_defaults: {},
        variables: {},
    }
    cwd = cwd
    env = env
    execArgv = []
    exit = exit
    _exiting = _exiting
    exitCode = undefined
    mainModule = undefined
    nextTick = nextTick1
    on(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.on("${event}")`)
            super.on(event, listener)
        } else if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {
            } else if (event === "SIGTERM" && Deno.build.os === "windows") {
            } else {
                Deno.addSignalListener(event, listener)
            }
        } else {
            super.on(event, listener)
        }
        return this
    }
    off(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.off("${event}")`)
            super.off(event, listener)
        } else if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {
            } else if (event === "SIGTERM" && Deno.build.os === "windows") {
            } else {
                Deno.removeSignalListener(event, listener)
            }
        } else {
            super.off(event, listener)
        }
        return this
    }
    emit(event, ...args) {
        if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {
            } else {
                Deno.kill(Deno.pid, event)
            }
        } else {
            return super.emit(event, ...args)
        }
        return true
    }
    prependListener(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.prependListener("${event}")`)
            super.prependListener(event, listener)
        } else if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {
            } else {
                Deno.addSignalListener(event, listener)
            }
        } else {
            super.prependListener(event, listener)
        }
        return this
    }
    pid = pid
    platform = platform
    addListener(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.addListener("${event}")`)
        }
        return this.on(event, listener)
    }
    removeListener(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.removeListener("${event}")`)
        }
        return this.off(event, listener)
    }
    hrtime = hrtime
    _kill = _kill
    kill = kill
    memoryUsage = memoryUsage
    stderr = stderr
    stdin = stdin
    stdout = stdout
    version = version
    versions = versions
    emitWarning = emitWarning
    binding(name) {
        return getBinding(name)
    }
    umask() {
        return 0o22
    }
    getgid() {
        return Deno.gid()
    }
    getuid() {
        return Deno.uid()
    }
    _eval = undefined
    get execPath() {
        if (execPath) {
            return execPath
        }
        execPath = Deno.execPath()
        return execPath
    }
    set execPath(path) {
        execPath = path
    }
    #startTime = Date.now()
    uptime() {
        return (Date.now() - this.#startTime) / 1000
    }
    #allowedFlags = buildAllowedFlags()
    get allowedNodeEnvironmentFlags() {
        return this.#allowedFlags
    }
    features = {
        inspector: false,
    }
    noDeprecation = false
}
if (Deno.build.os === "windows") {
    delete Process.prototype.getgid
    delete Process.prototype.getuid
}
const process2 = new Process()
Object.defineProperty(process2, Symbol.toStringTag, {
    enumerable: false,
    writable: true,
    configurable: false,
    value: "process",
})
addReadOnlyProcessAlias("noDeprecation", "--no-deprecation")
addReadOnlyProcessAlias("throwDeprecation", "--throw-deprecation")
process2.removeListener
process2.removeAllListeners
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args)
var q = Object.create
var M = Object.defineProperty
var k = Object.getOwnPropertyDescriptor
var b = Object.getOwnPropertyNames
var nn = Object.getPrototypeOf,
    en = Object.prototype.hasOwnProperty
var tn = (u, p) => () => (
        p ||
            u(
                (p = {
                    exports: {},
                }).exports,
                p
            ),
        p.exports
    ),
    rn = (u, p) => {
        for (var v in p)
            M(u, v, {
                get: p[v],
                enumerable: !0,
            })
    },
    U = (u, p, v, I) => {
        if ((p && typeof p == "object") || typeof p == "function")
            for (let g of b(p))
                !en.call(u, g) &&
                    g !== v &&
                    M(u, g, {
                        get: () => p[g],
                        enumerable: !(I = k(p, g)) || I.enumerable,
                    })
        return u
    },
    _ = (u, p, v) => (U(u, p, "default"), v && U(v, p, "default")),
    V1 = (u, p, v) => (
        (v = u != null ? q(nn(u)) : {}),
        U(
            p || !u || !u.__esModule
                ? M(v, "default", {
                      value: u,
                      enumerable: !0,
                  })
                : v,
            u
        )
    )
var W = tn((pe, z) => {
    ;(function () {
        var u = {},
            p,
            v
        ;(p = this),
            p != null && (v = p.async),
            (u.noConflict = function () {
                return (p.async = v), u
            })
        function I(e) {
            var n = !1
            return function () {
                if (n) throw new Error("Callback was already called.")
                ;(n = !0), e.apply(p, arguments)
            }
        }
        var g = Object.prototype.toString,
            S =
                Array.isArray ||
                function (e) {
                    return g.call(e) === "[object Array]"
                },
            y = function (e, n) {
                for (var r = 0; r < e.length; r += 1) n(e[r], r, e)
            },
            d = function (e, n) {
                if (e.map) return e.map(n)
                var r = []
                return (
                    y(e, function (i, t, o) {
                        r.push(n(i, t, o))
                    }),
                    r
                )
            },
            Z = function (e, n, r) {
                return e.reduce
                    ? e.reduce(n, r)
                    : (y(e, function (i, t, o) {
                          r = n(r, i, t, o)
                      }),
                      r)
            },
            T = function (e) {
                if (Object.keys) return Object.keys(e)
                var n = []
                for (var r in e) e.hasOwnProperty(r) && n.push(r)
                return n
            }
        typeof process2 > "u" || !process2.nextTick
            ? typeof __setImmediate$ == "function"
                ? ((u.nextTick = function (e) {
                      __setImmediate$(e)
                  }),
                  (u.setImmediate = u.nextTick))
                : ((u.nextTick = function (e) {
                      setTimeout(e, 0)
                  }),
                  (u.setImmediate = u.nextTick))
            : ((u.nextTick = process2.nextTick),
              typeof __setImmediate$ < "u"
                  ? (u.setImmediate = function (e) {
                        __setImmediate$(e)
                    })
                  : (u.setImmediate = u.nextTick)),
            (u.each = function (e, n, r) {
                if (((r = r || function () {}), !e.length)) return r()
                var i = 0
                y(e, function (o) {
                    n(o, I(t))
                })
                function t(o) {
                    o ? (r(o), (r = function () {})) : ((i += 1), i >= e.length && r())
                }
            }),
            (u.forEach = u.each),
            (u.eachSeries = function (e, n, r) {
                if (((r = r || function () {}), !e.length)) return r()
                var i = 0,
                    t = function () {
                        n(e[i], function (o) {
                            o ? (r(o), (r = function () {})) : ((i += 1), i >= e.length ? r() : t())
                        })
                    }
                t()
            }),
            (u.forEachSeries = u.eachSeries),
            (u.eachLimit = function (e, n, r, i) {
                var t = C(n)
                t.apply(null, [e, r, i])
            }),
            (u.forEachLimit = u.eachLimit)
        var C = function (e) {
                return function (n, r, i) {
                    if (((i = i || function () {}), !n.length || e <= 0)) return i()
                    var t = 0,
                        o = 0,
                        f = 0
                    ;(function c() {
                        if (t >= n.length) return i()
                        for (; f < e && o < n.length; )
                            (o += 1),
                                (f += 1),
                                r(n[o - 1], function (s) {
                                    s ? (i(s), (i = function () {})) : ((t += 1), (f -= 1), t >= n.length ? i() : c())
                                })
                    })()
                }
            },
            w = function (e) {
                return function () {
                    var n = Array.prototype.slice.call(arguments)
                    return e.apply(null, [u.each].concat(n))
                }
            },
            $ = function (e, n) {
                return function () {
                    var r = Array.prototype.slice.call(arguments)
                    return n.apply(null, [C(e)].concat(r))
                }
            },
            x = function (e) {
                return function () {
                    var n = Array.prototype.slice.call(arguments)
                    return e.apply(null, [u.eachSeries].concat(n))
                }
            },
            O = function (e, n, r, i) {
                if (
                    ((n = d(n, function (o, f) {
                        return {
                            index: f,
                            value: o,
                        }
                    })),
                    !i)
                )
                    e(n, function (o, f) {
                        r(o.value, function (c) {
                            f(c)
                        })
                    })
                else {
                    var t = []
                    e(
                        n,
                        function (o, f) {
                            r(o.value, function (c, s) {
                                ;(t[o.index] = s), f(c)
                            })
                        },
                        function (o) {
                            i(o, t)
                        }
                    )
                }
            }
        ;(u.map = w(O)),
            (u.mapSeries = x(O)),
            (u.mapLimit = function (e, n, r, i) {
                return B(n)(e, r, i)
            })
        var B = function (e) {
            return $(e, O)
        }
        ;(u.reduce = function (e, n, r, i) {
            u.eachSeries(
                e,
                function (t, o) {
                    r(n, t, function (f, c) {
                        ;(n = c), o(f)
                    })
                },
                function (t) {
                    i(t, n)
                }
            )
        }),
            (u.inject = u.reduce),
            (u.foldl = u.reduce),
            (u.reduceRight = function (e, n, r, i) {
                var t = d(e, function (o) {
                    return o
                }).reverse()
                u.reduce(t, n, r, i)
            }),
            (u.foldr = u.reduceRight)
        var F = function (e, n, r, i) {
            var t = []
            ;(n = d(n, function (o, f) {
                return {
                    index: f,
                    value: o,
                }
            })),
                e(
                    n,
                    function (o, f) {
                        r(o.value, function (c) {
                            c && t.push(o), f()
                        })
                    },
                    function (o) {
                        i(
                            d(
                                t.sort(function (f, c) {
                                    return f.index - c.index
                                }),
                                function (f) {
                                    return f.value
                                }
                            )
                        )
                    }
                )
        }
        ;(u.filter = w(F)), (u.filterSeries = x(F)), (u.select = u.filter), (u.selectSeries = u.filterSeries)
        var Q = function (e, n, r, i) {
            var t = []
            ;(n = d(n, function (o, f) {
                return {
                    index: f,
                    value: o,
                }
            })),
                e(
                    n,
                    function (o, f) {
                        r(o.value, function (c) {
                            c || t.push(o), f()
                        })
                    },
                    function (o) {
                        i(
                            d(
                                t.sort(function (f, c) {
                                    return f.index - c.index
                                }),
                                function (f) {
                                    return f.value
                                }
                            )
                        )
                    }
                )
        }
        ;(u.reject = w(Q)), (u.rejectSeries = x(Q))
        var D = function (e, n, r, i) {
            e(
                n,
                function (t, o) {
                    r(t, function (f) {
                        f ? (i(t), (i = function () {})) : o()
                    })
                },
                function (t) {
                    i()
                }
            )
        }
        ;(u.detect = w(D)),
            (u.detectSeries = x(D)),
            (u.some = function (e, n, r) {
                u.each(
                    e,
                    function (i, t) {
                        n(i, function (o) {
                            o && (r(!0), (r = function () {})), t()
                        })
                    },
                    function (i) {
                        r(!1)
                    }
                )
            }),
            (u.any = u.some),
            (u.every = function (e, n, r) {
                u.each(
                    e,
                    function (i, t) {
                        n(i, function (o) {
                            o || (r(!1), (r = function () {})), t()
                        })
                    },
                    function (i) {
                        r(!0)
                    }
                )
            }),
            (u.all = u.every),
            (u.sortBy = function (e, n, r) {
                u.map(
                    e,
                    function (i, t) {
                        n(i, function (o, f) {
                            o
                                ? t(o)
                                : t(null, {
                                      value: i,
                                      criteria: f,
                                  })
                        })
                    },
                    function (i, t) {
                        if (i) return r(i)
                        var o = function (f, c) {
                            var s = f.criteria,
                                a = c.criteria
                            return s < a ? -1 : s > a ? 1 : 0
                        }
                        r(
                            null,
                            d(t.sort(o), function (f) {
                                return f.value
                            })
                        )
                    }
                )
            }),
            (u.auto = function (e, n) {
                n = n || function () {}
                var r = T(e),
                    i = r.length
                if (!i) return n()
                var t = {},
                    o = [],
                    f = function (a) {
                        o.unshift(a)
                    },
                    c = function (a) {
                        for (var l = 0; l < o.length; l += 1)
                            if (o[l] === a) {
                                o.splice(l, 1)
                                return
                            }
                    },
                    s = function () {
                        i--,
                            y(o.slice(0), function (a) {
                                a()
                            })
                    }
                f(function () {
                    if (!i) {
                        var a = n
                        ;(n = function () {}), a(null, t)
                    }
                }),
                    y(r, function (a) {
                        var l = S(e[a]) ? e[a] : [e[a]],
                            m = function (j) {
                                var A = Array.prototype.slice.call(arguments, 1)
                                if ((A.length <= 1 && (A = A[0]), j)) {
                                    var P = {}
                                    y(T(t), function (N) {
                                        P[N] = t[N]
                                    }),
                                        (P[a] = A),
                                        n(j, P),
                                        (n = function () {})
                                } else (t[a] = A), u.setImmediate(s)
                            },
                            E = l.slice(0, Math.abs(l.length - 1)) || [],
                            L = function () {
                                return (
                                    Z(
                                        E,
                                        function (j, A) {
                                            return j && t.hasOwnProperty(A)
                                        },
                                        !0
                                    ) && !t.hasOwnProperty(a)
                                )
                            }
                        if (L()) l[l.length - 1](m, t)
                        else {
                            var K = function () {
                                L() && (c(K), l[l.length - 1](m, t))
                            }
                            f(K)
                        }
                    })
            }),
            (u.retry = function (e, n, r) {
                var i = 5,
                    t = []
                typeof e == "function" && ((r = n), (n = e), (e = i)), (e = parseInt(e, 10) || i)
                var o = function (f, c) {
                    for (
                        var s = function (a, l) {
                            return function (m) {
                                a(function (E, L) {
                                    m(!E || l, {
                                        err: E,
                                        result: L,
                                    })
                                }, c)
                            }
                        };
                        e;

                    )
                        t.push(s(n, !(e -= 1)))
                    u.series(t, function (a, l) {
                        ;(l = l[l.length - 1]), (f || r)(l.err, l.result)
                    })
                }
                return r ? o() : o
            }),
            (u.waterfall = function (e, n) {
                if (((n = n || function () {}), !S(e))) {
                    var r = new Error("First argument to waterfall must be an array of functions")
                    return n(r)
                }
                if (!e.length) return n()
                var i = function (t) {
                    return function (o) {
                        if (o) n.apply(null, arguments), (n = function () {})
                        else {
                            var f = Array.prototype.slice.call(arguments, 1),
                                c = t.next()
                            c ? f.push(i(c)) : f.push(n),
                                u.setImmediate(function () {
                                    t.apply(null, f)
                                })
                        }
                    }
                }
                i(u.iterator(e))()
            })
        var R = function (e, n, r) {
            if (((r = r || function () {}), S(n)))
                e.map(
                    n,
                    function (t, o) {
                        t &&
                            t(function (f) {
                                var c = Array.prototype.slice.call(arguments, 1)
                                c.length <= 1 && (c = c[0]), o.call(null, f, c)
                            })
                    },
                    r
                )
            else {
                var i = {}
                e.each(
                    T(n),
                    function (t, o) {
                        n[t](function (f) {
                            var c = Array.prototype.slice.call(arguments, 1)
                            c.length <= 1 && (c = c[0]), (i[t] = c), o(f)
                        })
                    },
                    function (t) {
                        r(t, i)
                    }
                )
            }
        }
        ;(u.parallel = function (e, n) {
            R(
                {
                    map: u.map,
                    each: u.each,
                },
                e,
                n
            )
        }),
            (u.parallelLimit = function (e, n, r) {
                R(
                    {
                        map: B(n),
                        each: C(n),
                    },
                    e,
                    r
                )
            }),
            (u.series = function (e, n) {
                if (((n = n || function () {}), S(e)))
                    u.mapSeries(
                        e,
                        function (i, t) {
                            i &&
                                i(function (o) {
                                    var f = Array.prototype.slice.call(arguments, 1)
                                    f.length <= 1 && (f = f[0]), t.call(null, o, f)
                                })
                        },
                        n
                    )
                else {
                    var r = {}
                    u.eachSeries(
                        T(e),
                        function (i, t) {
                            e[i](function (o) {
                                var f = Array.prototype.slice.call(arguments, 1)
                                f.length <= 1 && (f = f[0]), (r[i] = f), t(o)
                            })
                        },
                        function (i) {
                            n(i, r)
                        }
                    )
                }
            }),
            (u.iterator = function (e) {
                var n = function (r) {
                    var i = function () {
                        return e.length && e[r].apply(null, arguments), i.next()
                    }
                    return (
                        (i.next = function () {
                            return r < e.length - 1 ? n(r + 1) : null
                        }),
                        i
                    )
                }
                return n(0)
            }),
            (u.apply = function (e) {
                var n = Array.prototype.slice.call(arguments, 1)
                return function () {
                    return e.apply(null, n.concat(Array.prototype.slice.call(arguments)))
                }
            })
        var G = function (e, n, r, i) {
            var t = []
            e(
                n,
                function (o, f) {
                    r(o, function (c, s) {
                        ;(t = t.concat(s || [])), f(c)
                    })
                },
                function (o) {
                    i(o, t)
                }
            )
        }
        ;(u.concat = w(G)),
            (u.concatSeries = x(G)),
            (u.whilst = function (e, n, r) {
                e()
                    ? n(function (i) {
                          if (i) return r(i)
                          u.whilst(e, n, r)
                      })
                    : r()
            }),
            (u.doWhilst = function (e, n, r) {
                e(function (i) {
                    if (i) return r(i)
                    var t = Array.prototype.slice.call(arguments, 1)
                    n.apply(null, t) ? u.doWhilst(e, n, r) : r()
                })
            }),
            (u.until = function (e, n, r) {
                e()
                    ? r()
                    : n(function (i) {
                          if (i) return r(i)
                          u.until(e, n, r)
                      })
            }),
            (u.doUntil = function (e, n, r) {
                e(function (i) {
                    if (i) return r(i)
                    var t = Array.prototype.slice.call(arguments, 1)
                    n.apply(null, t) ? r() : u.doUntil(e, n, r)
                })
            }),
            (u.queue = function (e, n) {
                n === void 0 && (n = 1)
                function r(o, f, c, s) {
                    if ((o.started || (o.started = !0), S(f) || (f = [f]), f.length == 0))
                        return u.setImmediate(function () {
                            o.drain && o.drain()
                        })
                    y(f, function (a) {
                        var l = {
                            data: a,
                            callback: typeof s == "function" ? s : null,
                        }
                        c ? o.tasks.unshift(l) : o.tasks.push(l), o.saturated && o.tasks.length === o.concurrency && o.saturated(), u.setImmediate(o.process)
                    })
                }
                var i = 0,
                    t = {
                        tasks: [],
                        concurrency: n,
                        saturated: null,
                        empty: null,
                        drain: null,
                        started: !1,
                        paused: !1,
                        push: function (o, f) {
                            r(t, o, !1, f)
                        },
                        kill: function () {
                            ;(t.drain = null), (t.tasks = [])
                        },
                        unshift: function (o, f) {
                            r(t, o, !0, f)
                        },
                        process: function () {
                            if (!t.paused && i < t.concurrency && t.tasks.length) {
                                var o = t.tasks.shift()
                                t.empty && t.tasks.length === 0 && t.empty(), (i += 1)
                                var f = function () {
                                        ;(i -= 1), o.callback && o.callback.apply(o, arguments), t.drain && t.tasks.length + i === 0 && t.drain(), t.process()
                                    },
                                    c = I(f)
                                e(o.data, c)
                            }
                        },
                        length: function () {
                            return t.tasks.length
                        },
                        running: function () {
                            return i
                        },
                        idle: function () {
                            return t.tasks.length + i === 0
                        },
                        pause: function () {
                            t.paused !== !0 && (t.paused = !0)
                        },
                        resume: function () {
                            if (t.paused !== !1) {
                                t.paused = !1
                                for (var o = 1; o <= t.concurrency; o++) u.setImmediate(t.process)
                            }
                        },
                    }
                return t
            }),
            (u.priorityQueue = function (e, n) {
                function r(f, c) {
                    return f.priority - c.priority
                }
                function i(f, c, s) {
                    for (var a = -1, l = f.length - 1; a < l; ) {
                        var m = a + ((l - a + 1) >>> 1)
                        s(c, f[m]) >= 0 ? (a = m) : (l = m - 1)
                    }
                    return a
                }
                function t(f, c, s, a) {
                    if ((f.started || (f.started = !0), S(c) || (c = [c]), c.length == 0))
                        return u.setImmediate(function () {
                            f.drain && f.drain()
                        })
                    y(c, function (l) {
                        var m = {
                            data: l,
                            priority: s,
                            callback: typeof a == "function" ? a : null,
                        }
                        f.tasks.splice(i(f.tasks, m, r) + 1, 0, m), f.saturated && f.tasks.length === f.concurrency && f.saturated(), u.setImmediate(f.process)
                    })
                }
                var o = u.queue(e, n)
                return (
                    (o.push = function (f, c, s) {
                        t(o, f, c, s)
                    }),
                    delete o.unshift,
                    o
                )
            }),
            (u.cargo = function (e, n) {
                var r = !1,
                    i = [],
                    t = {
                        tasks: i,
                        payload: n,
                        saturated: null,
                        empty: null,
                        drain: null,
                        drained: !0,
                        push: function (o, f) {
                            S(o) || (o = [o]),
                                y(o, function (c) {
                                    i.push({
                                        data: c,
                                        callback: typeof f == "function" ? f : null,
                                    }),
                                        (t.drained = !1),
                                        t.saturated && i.length === n && t.saturated()
                                }),
                                u.setImmediate(t.process)
                        },
                        process: function o() {
                            if (!r) {
                                if (i.length === 0) {
                                    t.drain && !t.drained && t.drain(), (t.drained = !0)
                                    return
                                }
                                var f = typeof n == "number" ? i.splice(0, n) : i.splice(0, i.length),
                                    c = d(f, function (s) {
                                        return s.data
                                    })
                                t.empty && t.empty(),
                                    (r = !0),
                                    e(c, function () {
                                        r = !1
                                        var s = arguments
                                        y(f, function (a) {
                                            a.callback && a.callback.apply(null, s)
                                        }),
                                            o()
                                    })
                            }
                        },
                        length: function () {
                            return i.length
                        },
                        running: function () {
                            return r
                        },
                    }
                return t
            })
        var H = function (e) {
            return function (n) {
                var r = Array.prototype.slice.call(arguments, 1)
                n.apply(
                    null,
                    r.concat([
                        function (i) {
                            var t = Array.prototype.slice.call(arguments, 1)
                            typeof console < "u" &&
                                (i
                                    ? console.error && console.error(i)
                                    : console[e] &&
                                      y(t, function (o) {
                                          console[e](o)
                                      }))
                        },
                    ])
                )
            }
        }
        ;(u.log = H("log")),
            (u.dir = H("dir")),
            (u.memoize = function (e, n) {
                var r = {},
                    i = {}
                n =
                    n ||
                    function (o) {
                        return o
                    }
                var t = function () {
                    var o = Array.prototype.slice.call(arguments),
                        f = o.pop(),
                        c = n.apply(null, o)
                    c in r
                        ? u.nextTick(function () {
                              f.apply(null, r[c])
                          })
                        : c in i
                        ? i[c].push(f)
                        : ((i[c] = [f]),
                          e.apply(
                              null,
                              o.concat([
                                  function () {
                                      r[c] = arguments
                                      var s = i[c]
                                      delete i[c]
                                      for (var a = 0, l = s.length; a < l; a++) s[a].apply(null, arguments)
                                  },
                              ])
                          ))
                }
                return (t.memo = r), (t.unmemoized = e), t
            }),
            (u.unmemoize = function (e) {
                return function () {
                    return (e.unmemoized || e).apply(null, arguments)
                }
            }),
            (u.times = function (e, n, r) {
                for (var i = [], t = 0; t < e; t++) i.push(t)
                return u.map(i, n, r)
            }),
            (u.timesSeries = function (e, n, r) {
                for (var i = [], t = 0; t < e; t++) i.push(t)
                return u.mapSeries(i, n, r)
            }),
            (u.seq = function () {
                var e = arguments
                return function () {
                    var n = this,
                        r = Array.prototype.slice.call(arguments),
                        i = r.pop()
                    u.reduce(
                        e,
                        r,
                        function (t, o, f) {
                            o.apply(
                                n,
                                t.concat([
                                    function () {
                                        var c = arguments[0],
                                            s = Array.prototype.slice.call(arguments, 1)
                                        f(c, s)
                                    },
                                ])
                            )
                        },
                        function (t, o) {
                            i.apply(n, [t].concat(o))
                        }
                    )
                }
            }),
            (u.compose = function () {
                return u.seq.apply(null, Array.prototype.reverse.call(arguments))
            })
        var J = function (e, n) {
            var r = function () {
                var t = this,
                    o = Array.prototype.slice.call(arguments),
                    f = o.pop()
                return e(
                    n,
                    function (c, s) {
                        c.apply(t, o.concat([s]))
                    },
                    f
                )
            }
            if (arguments.length > 2) {
                var i = Array.prototype.slice.call(arguments, 2)
                return r.apply(this, i)
            } else return r
        }
        ;(u.applyEach = w(J)),
            (u.applyEachSeries = x(J)),
            (u.forever = function (e, n) {
                function r(i) {
                    if (i) {
                        if (n) return n(i)
                        throw i
                    }
                    e(r)
                }
                r()
            }),
            typeof z < "u" && z.exports
                ? (z.exports = u)
                : typeof define < "u" && define.amd
                ? define([], function () {
                      return u
                  })
                : (p.async = u)
    })()
})
var h = {}
rn(h, {
    all: () => Un,
    any: () => On,
    apply: () => Hn,
    applyEach: () => oe,
    applyEachSeries: () => fe,
    auto: () => Wn,
    cargo: () => qn,
    compose: () => ue,
    concat: () => Jn,
    concatSeries: () => Kn,
    default: () => se,
    detect: () => jn,
    detectSeries: () => zn,
    dir: () => bn,
    doUntil: () => Yn,
    doWhilst: () => Vn1,
    each: () => cn,
    eachLimit: () => pn,
    eachSeries: () => sn,
    every: () => Pn,
    filter: () => wn,
    filterSeries: () => xn1,
    foldl: () => Sn,
    foldr: () => _n,
    forEach: () => an,
    forEachLimit: () => vn,
    forEachSeries: () => ln,
    forever: () => ce,
    inject: () => gn,
    iterator: () => Gn,
    log: () => kn,
    map: () => yn,
    mapLimit: () => dn,
    mapSeries: () => mn,
    memoize: () => ne,
    nextTick: () => on1,
    noConflict: () => un,
    parallel: () => Qn,
    parallelLimit: () => Dn,
    priorityQueue: () => $n,
    queue: () => Zn,
    reduce: () => hn,
    reduceRight: () => An,
    reject: () => En,
    rejectSeries: () => Ln,
    retry: () => Bn,
    select: () => In,
    selectSeries: () => Tn,
    seq: () => ie,
    series: () => Rn,
    setImmediate: () => fn,
    some: () => Cn,
    sortBy: () => Mn,
    times: () => te,
    timesSeries: () => re,
    unmemoize: () => ee,
    until: () => Xn,
    waterfall: () => Fn,
    whilst: () => Nn,
})
var Y1 = V1(W())
_(h, V1(W()))
var { noConflict: un, nextTick: on1, setImmediate: fn, each: cn, forEach: an, eachSeries: sn, forEachSeries: ln, eachLimit: pn, forEachLimit: vn, map: yn, mapSeries: mn, mapLimit: dn, reduce: hn, inject: gn, foldl: Sn, reduceRight: An, foldr: _n, filter: wn, filterSeries: xn1, select: In, selectSeries: Tn, reject: En, rejectSeries: Ln, detect: jn, detectSeries: zn, some: Cn, any: On, every: Pn, all: Un, sortBy: Mn, auto: Wn, retry: Bn, waterfall: Fn, parallel: Qn, parallelLimit: Dn, series: Rn, iterator: Gn, apply: Hn, concat: Jn, concatSeries: Kn, whilst: Nn, doWhilst: Vn1, until: Xn, doUntil: Yn, queue: Zn, priorityQueue: $n, cargo: qn, log: kn, dir: bn, memoize: ne, unmemoize: ee, times: te, timesSeries: re, seq: ie, compose: ue, applyEach: oe, applyEachSeries: fe, forever: ce } = Y1,
    { default: X, ...ae } = Y1,
    se = X !== void 0 ? X : ae
const mod49 = {
    all: Un,
    any: On,
    apply: Hn,
    applyEach: oe,
    applyEachSeries: fe,
    auto: Wn,
    cargo: qn,
    compose: ue,
    concat: Jn,
    concatSeries: Kn,
    default: se,
    detect: jn,
    detectSeries: zn,
    dir: bn,
    doUntil: Yn,
    doWhilst: Vn1,
    each: cn,
    eachLimit: pn,
    eachSeries: sn,
    every: Pn,
    filter: wn,
    filterSeries: xn1,
    foldl: Sn,
    foldr: _n,
    forEach: an,
    forEachLimit: vn,
    forEachSeries: ln,
    forever: ce,
    inject: gn,
    iterator: Gn,
    log: kn,
    map: yn,
    mapLimit: dn,
    mapSeries: mn,
    memoize: ne,
    nextTick: on1,
    noConflict: un,
    parallel: Qn,
    parallelLimit: Dn,
    priorityQueue: $n,
    queue: Zn,
    reduce: hn,
    reduceRight: An,
    reject: En,
    rejectSeries: Ln,
    retry: Bn,
    select: In,
    selectSeries: Tn,
    seq: ie,
    series: Rn,
    setImmediate: fn,
    some: Cn,
    sortBy: Mn,
    times: te,
    timesSeries: re,
    unmemoize: ee,
    until: Xn,
    waterfall: Fn,
    whilst: Nn,
}
var __global$ = globalThis || (typeof window !== "undefined" ? window : self)
var $e = Object.defineProperty
var Ye1 = (r, t) => {
    for (var e in t)
        $e(r, e, {
            get: t[e],
            enumerable: !0,
        })
}
var ee1 = {}
Ye1(ee1, {
    VERSION: () => Rr,
    after: () => qt,
    all: () => br,
    allKeys: () => T,
    any: () => jr,
    assign: () => U1,
    before: () => _r,
    bind: () => Yr,
    bindAll: () => Fe,
    chain: () => Ft,
    chunk: () => te1,
    clone: () => _t,
    collect: () => P,
    compact: () => Qt,
    compose: () => Ct,
    constant: () => pr,
    contains: () => O1,
    countBy: () => qe,
    create: () => wt,
    debounce: () => zt,
    default: () => Xe,
    defaults: () => Gr,
    defer: () => Se,
    delay: () => Jr,
    detect: () => er,
    difference: () => tt,
    drop: () => Y2,
    each: () => A,
    escape: () => Me,
    every: () => br,
    extend: () => Kr,
    extendOwn: () => U1,
    filter: () => M1,
    find: () => er,
    findIndex: () => tr,
    findKey: () => Or,
    findLastIndex: () => Hr,
    findWhere: () => kt,
    first: () => Fr,
    flatten: () => Zt,
    foldl: () => Zr,
    foldr: () => Ut,
    forEach: () => A,
    functions: () => b1,
    get: () => gr,
    groupBy: () => De,
    has: () => Et,
    head: () => Fr,
    identity: () => K,
    include: () => O1,
    includes: () => O1,
    indexBy: () => Ce1,
    indexOf: () => Qr,
    initial: () => Nr,
    inject: () => Zr,
    intersection: () => bt,
    invert: () => xr,
    invoke: () => ze,
    isArguments: () => Q,
    isArray: () => E,
    isArrayBuffer: () => qr,
    isBoolean: () => ur,
    isDataView: () => C,
    isDate: () => ce1,
    isElement: () => pt,
    isEmpty: () => dt,
    isEqual: () => ht,
    isError: () => xe,
    isFinite: () => ct1,
    isFunction: () => x,
    isMap: () => Ee,
    isMatch: () => dr,
    isNaN: () => mr,
    isNull: () => mt,
    isNumber: () => Dr,
    isObject: () => _1,
    isRegExp: () => de,
    isSet: () => Pe,
    isString: () => J,
    isSymbol: () => Cr,
    isTypedArray: () => Ur,
    isUndefined: () => ir,
    isWeakMap: () => Ie,
    isWeakSet: () => Be,
    iteratee: () => j1,
    keys: () => l,
    last: () => Ht,
    lastIndexOf: () => Ve,
    map: () => P,
    mapObject: () => It,
    matcher: () => S,
    matches: () => S,
    max: () => Mr,
    memoize: () => Rt,
    methods: () => b1,
    min: () => Gt,
    mixin: () => Sr,
    negate: () => X1,
    noop: () => yr,
    now: () => z,
    object: () => jt,
    omit: () => Ue,
    once: () => Re,
    pairs: () => At,
    partial: () => D,
    partition: () => ke1,
    pick: () => rt,
    pluck: () => $,
    property: () => G,
    propertyOf: () => Pt1,
    random: () => rr,
    range: () => re1,
    reduce: () => Zr,
    reduceRight: () => Ut,
    reject: () => Wt,
    rest: () => Y2,
    restArguments: () => d,
    result: () => Lt,
    sample: () => Lr,
    select: () => M1,
    shuffle: () => Xt,
    size: () => Yt,
    some: () => jr,
    sortBy: () => $t,
    sortedIndex: () => Ir,
    tail: () => Y2,
    take: () => Fr,
    tap: () => Ot,
    template: () => Tt1,
    templateSettings: () => Ne,
    throttle: () => Vt,
    times: () => Bt1,
    toArray: () => Tr,
    toPath: () => Xr,
    transpose: () => fr,
    unescape: () => Le1,
    union: () => Ke,
    uniq: () => or,
    unique: () => or,
    uniqueId: () => Nt,
    unzip: () => fr,
    values: () => B,
    where: () => Kt,
    without: () => We,
    wrap: () => Dt,
    zip: () => Ge,
})
var Rr = "1.13.6",
    et = (typeof self == "object" && self.self === self && self) || (typeof __global$ == "object" && __global$.global === __global$ && __global$) || Function("return this")() || {},
    ar = Array.prototype,
    Vr = Object.prototype,
    ot = typeof Symbol < "u" ? Symbol.prototype : null,
    ae1 = ar.push,
    F = ar.slice,
    R = Vr.toString,
    ie1 = Vr.hasOwnProperty,
    ft = typeof ArrayBuffer < "u",
    ue1 = typeof DataView < "u",
    me = Array.isArray,
    nt = Object.keys,
    at = Object.create,
    it = ft && ArrayBuffer.isView,
    pe = isNaN,
    le = isFinite,
    zr = !{
        toString: null,
    }.propertyIsEnumerable("toString"),
    ut = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
    se1 = Math.pow(2, 53) - 1
function d(r, t) {
    return (
        (t = t == null ? r.length - 1 : +t),
        function () {
            for (var e = Math.max(arguments.length - t, 0), o = Array(e), n = 0; n < e; n++) o[n] = arguments[n + t]
            switch (t) {
                case 0:
                    return r.call(this, o)
                case 1:
                    return r.call(this, arguments[0], o)
                case 2:
                    return r.call(this, arguments[0], arguments[1], o)
            }
            var f = Array(t + 1)
            for (n = 0; n < t; n++) f[n] = arguments[n]
            return (f[t] = o), r.apply(this, f)
        }
    )
}
function _1(r) {
    var t = typeof r
    return t === "function" || (t === "object" && !!r)
}
function mt(r) {
    return r === null
}
function ir(r) {
    return r === void 0
}
function ur(r) {
    return r === !0 || r === !1 || R.call(r) === "[object Boolean]"
}
function pt(r) {
    return !!(r && r.nodeType === 1)
}
function s(r) {
    var t = "[object " + r + "]"
    return function (e) {
        return R.call(e) === t
    }
}
var J = s("String")
var Dr = s("Number")
var ce1 = s("Date")
var de = s("RegExp")
var xe = s("Error")
var Cr = s("Symbol")
var qr = s("ArrayBuffer")
var he = s("Function"),
    Je = et.document && et.document.childNodes
typeof /./ != "function" &&
    typeof Int8Array != "object" &&
    typeof Je != "function" &&
    (he = function (r) {
        return typeof r == "function" || !1
    })
var x = he
var lt = s("Object")
var kr1 = ue1 && lt(new DataView(new ArrayBuffer(8))),
    H = typeof Map < "u" && lt(new Map())
var He = s("DataView")
function Qe(r) {
    return r != null && x(r.getInt8) && qr(r.buffer)
}
var C = kr1 ? Qe : He
var E = me || s("Array")
function y(r, t) {
    return r != null && ie1.call(r, t)
}
var st = s("Arguments")
;(function () {
    st(arguments) ||
        (st = function (r) {
            return y(r, "callee")
        })
})()
var Q = st
function ct1(r) {
    return !Cr(r) && le(r) && !isNaN(parseFloat(r))
}
function mr(r) {
    return Dr(r) && pe(r)
}
function pr(r) {
    return function () {
        return r
    }
}
function lr(r) {
    return function (t) {
        var e = r(t)
        return typeof e == "number" && e >= 0 && e <= se1
    }
}
function sr(r) {
    return function (t) {
        return t?.[r]
    }
}
var q1 = sr("byteLength")
var ge = lr(q1)
var Ze = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/
function be(r) {
    return it ? it(r) && !C(r) : ge(r) && Ze.test(R.call(r))
}
var Ur = ft ? be : pr(!1)
var h1 = sr("length")
function je(r) {
    for (var t = {}, e = r.length, o = 0; o < e; ++o) t[r[o]] = !0
    return {
        contains: function (n) {
            return t[n] === !0
        },
        push: function (n) {
            return (t[n] = !0), r.push(n)
        },
    }
}
function cr(r, t) {
    t = je(t)
    var e = ut.length,
        o = r.constructor,
        n = (x(o) && o.prototype) || Vr,
        f = "constructor"
    for (y(r, f) && !t.contains(f) && t.push(f); e--; ) (f = ut[e]), f in r && r[f] !== n[f] && !t.contains(f) && t.push(f)
}
function l(r) {
    if (!_1(r)) return []
    if (nt) return nt(r)
    var t = []
    for (var e in r) y(r, e) && t.push(e)
    return zr && cr(r, t), t
}
function dt(r) {
    if (r == null) return !0
    var t = h1(r)
    return typeof t == "number" && (E(r) || J(r) || Q(r)) ? t === 0 : h1(l(r)) === 0
}
function dr(r, t) {
    var e = l(t),
        o = e.length
    if (r == null) return !o
    for (var n = Object(r), f = 0; f < o; f++) {
        var a = e[f]
        if (t[a] !== n[a] || !(a in n)) return !1
    }
    return !0
}
function m1(r) {
    if (r instanceof m1) return r
    if (!(this instanceof m1)) return new m1(r)
    this._wrapped = r
}
m1.VERSION = Rr
m1.prototype.value = function () {
    return this._wrapped
}
m1.prototype.valueOf = m1.prototype.toJSON = m1.prototype.value
m1.prototype.toString = function () {
    return String(this._wrapped)
}
function Wr(r) {
    return new Uint8Array(r.buffer || r, r.byteOffset || 0, q1(r))
}
var ve = "[object DataView]"
function xt1(r, t, e, o) {
    if (r === t) return r !== 0 || 1 / r === 1 / t
    if (r == null || t == null) return !1
    if (r !== r) return t !== t
    var n = typeof r
    return n !== "function" && n !== "object" && typeof t != "object" ? !1 : ye(r, t, e, o)
}
function ye(r, t, e, o) {
    r instanceof m1 && (r = r._wrapped), t instanceof m1 && (t = t._wrapped)
    var n = R.call(r)
    if (n !== R.call(t)) return !1
    if (kr1 && n == "[object Object]" && C(r)) {
        if (!C(t)) return !1
        n = ve
    }
    switch (n) {
        case "[object RegExp]":
        case "[object String]":
            return "" + r == "" + t
        case "[object Number]":
            return +r != +r ? +t != +t : +r == 0 ? 1 / +r === 1 / t : +r == +t
        case "[object Date]":
        case "[object Boolean]":
            return +r == +t
        case "[object Symbol]":
            return ot.valueOf.call(r) === ot.valueOf.call(t)
        case "[object ArrayBuffer]":
        case ve:
            return ye(Wr(r), Wr(t), e, o)
    }
    var f = n === "[object Array]"
    if (!f && Ur(r)) {
        var a = q1(r)
        if (a !== q1(t)) return !1
        if (r.buffer === t.buffer && r.byteOffset === t.byteOffset) return !0
        f = !0
    }
    if (!f) {
        if (typeof r != "object" || typeof t != "object") return !1
        var i = r.constructor,
            p = t.constructor
        if (i !== p && !(x(i) && i instanceof i && x(p) && p instanceof p) && "constructor" in r && "constructor" in t) return !1
    }
    ;(e = e || []), (o = o || [])
    for (var u = e.length; u--; ) if (e[u] === r) return o[u] === t
    if ((e.push(r), o.push(t), f)) {
        if (((u = r.length), u !== t.length)) return !1
        for (; u--; ) if (!xt1(r[u], t[u], e, o)) return !1
    } else {
        var v = l(r),
            w
        if (((u = v.length), l(t).length !== u)) return !1
        for (; u--; ) if (((w = v[u]), !(y(t, w) && xt1(r[w], t[w], e, o)))) return !1
    }
    return e.pop(), o.pop(), !0
}
function ht(r, t) {
    return xt1(r, t)
}
function T(r) {
    if (!_1(r)) return []
    var t = []
    for (var e in r) t.push(e)
    return zr && cr(r, t), t
}
function Z1(r) {
    var t = h1(r)
    return function (e) {
        if (e == null) return !1
        var o = T(e)
        if (h1(o)) return !1
        for (var n = 0; n < t; n++) if (!x(e[r[n]])) return !1
        return r !== yt || !x(e[gt])
    }
}
var gt = "forEach",
    Ae = "has",
    vt1 = ["clear", "delete"],
    we1 = ["get", Ae, "set"],
    _e1 = vt1.concat(gt, we1),
    yt = vt1.concat(we1),
    Oe = ["add"].concat(vt1, gt, Ae)
var Ee = H ? Z1(_e1) : s("Map")
var Ie = H ? Z1(yt) : s("WeakMap")
var Pe = H ? Z1(Oe) : s("Set")
var Be = s("WeakSet")
function B(r) {
    for (var t = l(r), e = t.length, o = Array(e), n = 0; n < e; n++) o[n] = r[t[n]]
    return o
}
function At(r) {
    for (var t = l(r), e = t.length, o = Array(e), n = 0; n < e; n++) o[n] = [t[n], r[t[n]]]
    return o
}
function xr(r) {
    for (var t = {}, e = l(r), o = 0, n = e.length; o < n; o++) t[r[e[o]]] = e[o]
    return t
}
function b1(r) {
    var t = []
    for (var e in r) x(r[e]) && t.push(e)
    return t.sort()
}
function k1(r, t) {
    return function (e) {
        var o = arguments.length
        if ((t && (e = Object(e)), o < 2 || e == null)) return e
        for (var n = 1; n < o; n++)
            for (var f = arguments[n], a = r(f), i = a.length, p = 0; p < i; p++) {
                var u = a[p]
                ;(!t || e[u] === void 0) && (e[u] = f[u])
            }
        return e
    }
}
var Kr = k1(T)
var U1 = k1(l)
var Gr = k1(T, !0)
function ro() {
    return function () {}
}
function hr(r) {
    if (!_1(r)) return {}
    if (at) return at(r)
    var t = ro()
    t.prototype = r
    var e = new t()
    return (t.prototype = null), e
}
function wt(r, t) {
    var e = hr(r)
    return t && U1(e, t), e
}
function _t(r) {
    return _1(r) ? (E(r) ? r.slice() : Kr({}, r)) : r
}
function Ot(r, t) {
    return t(r), r
}
function Xr(r) {
    return E(r) ? r : [r]
}
m1.toPath = Xr
function L(r) {
    return m1.toPath(r)
}
function W1(r, t) {
    for (var e = t.length, o = 0; o < e; o++) {
        if (r == null) return
        r = r[t[o]]
    }
    return e ? r : void 0
}
function gr(r, t, e) {
    var o = W1(r, L(t))
    return ir(o) ? e : o
}
function Et(r, t) {
    t = L(t)
    for (var e = t.length, o = 0; o < e; o++) {
        var n = t[o]
        if (!y(r, n)) return !1
        r = r[n]
    }
    return !!e
}
function K(r) {
    return r
}
function S(r) {
    return (
        (r = U1({}, r)),
        function (t) {
            return dr(t, r)
        }
    )
}
function G(r) {
    return (
        (r = L(r)),
        function (t) {
            return W1(t, r)
        }
    )
}
function N(r, t, e) {
    if (t === void 0) return r
    switch (e ?? 3) {
        case 1:
            return function (o) {
                return r.call(t, o)
            }
        case 3:
            return function (o, n, f) {
                return r.call(t, o, n, f)
            }
        case 4:
            return function (o, n, f, a) {
                return r.call(t, o, n, f, a)
            }
    }
    return function () {
        return r.apply(t, arguments)
    }
}
function vr(r, t, e) {
    return r == null ? K : x(r) ? N(r, t, e) : _1(r) && !E(r) ? S(r) : G(r)
}
function j1(r, t) {
    return vr(r, t, 1 / 0)
}
m1.iteratee = j1
function c(r, t, e) {
    return m1.iteratee !== j1 ? m1.iteratee(r, t) : vr(r, t, e)
}
function It(r, t, e) {
    t = c(t, e)
    for (var o = l(r), n = o.length, f = {}, a = 0; a < n; a++) {
        var i = o[a]
        f[i] = t(r[i], i, r)
    }
    return f
}
function yr() {}
function Pt1(r) {
    return r == null
        ? yr
        : function (t) {
              return gr(r, t)
          }
}
function Bt1(r, t, e) {
    var o = Array(Math.max(0, r))
    t = N(t, e, 1)
    for (var n = 0; n < r; n++) o[n] = t(n)
    return o
}
function rr(r, t) {
    return t == null && ((t = r), (r = 0)), r + Math.floor(Math.random() * (t - r + 1))
}
var z =
    Date.now ||
    function () {
        return new Date().getTime()
    }
function Ar(r) {
    var t = function (f) {
            return r[f]
        },
        e = "(?:" + l(r).join("|") + ")",
        o = RegExp(e),
        n = RegExp(e, "g")
    return function (f) {
        return (f = f == null ? "" : "" + f), o.test(f) ? f.replace(n, t) : f
    }
}
var $r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
}
var Me = Ar($r)
var Te = xr($r)
var Le1 = Ar(Te)
var Ne = (m1.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g,
})
var Mt = /(.)^/,
    to = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
    },
    eo = /\\|'|\r|\n|\u2028|\u2029/g
function oo(r) {
    return "\\" + to[r]
}
var fo = /^\s*(\w|\$)+\s*$/
function Tt1(r, t, e) {
    !t && e && (t = e), (t = Gr({}, t, m1.templateSettings))
    var o = RegExp([(t.escape || Mt).source, (t.interpolate || Mt).source, (t.evaluate || Mt).source].join("|") + "|$", "g"),
        n = 0,
        f = "__p+='"
    r.replace(o, function (u, v, w, fe, ne) {
        return (
            (f += r.slice(n, ne).replace(eo, oo)),
            (n = ne + u.length),
            v
                ? (f +=
                      `'+
((__t=(` +
                      v +
                      `))==null?'':_.escape(__t))+
'`)
                : w
                ? (f +=
                      `'+
((__t=(` +
                      w +
                      `))==null?'':__t)+
'`)
                : fe &&
                  (f +=
                      `';
` +
                      fe +
                      `
__p+='`),
            u
        )
    }),
        (f += `';
`)
    var a = t.variable
    if (a) {
        if (!fo.test(a)) throw new Error("variable is not a bare identifier: " + a)
    } else
        (f =
            `with(obj||{}){
` +
            f +
            `}
`),
            (a = "obj")
    f =
        `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
        f +
        `return __p;
`
    var i
    try {
        i = new Function(a, "_", f)
    } catch (u) {
        throw ((u.source = f), u)
    }
    var p = function (u) {
        return i.call(this, u, m1)
    }
    return (
        (p.source =
            "function(" +
            a +
            `){
` +
            f +
            "}"),
        p
    )
}
function Lt(r, t, e) {
    t = L(t)
    var o = t.length
    if (!o) return x(e) ? e.call(r) : e
    for (var n = 0; n < o; n++) {
        var f = r?.[t[n]]
        f === void 0 && ((f = e), (n = o)), (r = x(f) ? f.call(r) : f)
    }
    return r
}
var no = 0
function Nt(r) {
    var t = ++no + ""
    return r ? r + t : t
}
function Ft(r) {
    var t = m1(r)
    return (t._chain = !0), t
}
function wr(r, t, e, o, n) {
    if (!(o instanceof t)) return r.apply(e, n)
    var f = hr(r.prototype),
        a = r.apply(f, n)
    return _1(a) ? a : f
}
var St = d(function (r, t) {
    var e = St.placeholder,
        o = function () {
            for (var n = 0, f = t.length, a = Array(f), i = 0; i < f; i++) a[i] = t[i] === e ? arguments[n++] : t[i]
            for (; n < arguments.length; ) a.push(arguments[n++])
            return wr(r, o, this, this, a)
        }
    return o
})
St.placeholder = m1
var D = St
var Yr = d(function (r, t, e) {
    if (!x(r)) throw new TypeError("Bind must be called on a function")
    var o = d(function (n) {
        return wr(r, o, t, this, e.concat(n))
    })
    return o
})
var g1 = lr(h1)
function I(r, t, e, o) {
    if (((o = o || []), !t && t !== 0)) t = 1 / 0
    else if (t <= 0) return o.concat(r)
    for (var n = o.length, f = 0, a = h1(r); f < a; f++) {
        var i = r[f]
        if (g1(i) && (E(i) || Q(i)))
            if (t > 1) I(i, t - 1, e, o), (n = o.length)
            else for (var p = 0, u = i.length; p < u; ) o[n++] = i[p++]
        else e || (o[n++] = i)
    }
    return o
}
var Fe = d(function (r, t) {
    t = I(t, !1, !1)
    var e = t.length
    if (e < 1) throw new Error("bindAll must be passed function names")
    for (; e--; ) {
        var o = t[e]
        r[o] = Yr(r[o], r)
    }
    return r
})
function Rt(r, t) {
    var e = function (o) {
        var n = e.cache,
            f = "" + (t ? t.apply(this, arguments) : o)
        return y(n, f) || (n[f] = r.apply(this, arguments)), n[f]
    }
    return (e.cache = {}), e
}
var Jr = d(function (r, t, e) {
    return setTimeout(function () {
        return r.apply(null, e)
    }, t)
})
var Se = D(Jr, m1, 1)
function Vt(r, t, e) {
    var o,
        n,
        f,
        a,
        i = 0
    e || (e = {})
    var p = function () {
            ;(i = e.leading === !1 ? 0 : z()), (o = null), (a = r.apply(n, f)), o || (n = f = null)
        },
        u = function () {
            var v = z()
            !i && e.leading === !1 && (i = v)
            var w = t - (v - i)
            return (n = this), (f = arguments), w <= 0 || w > t ? (o && (clearTimeout(o), (o = null)), (i = v), (a = r.apply(n, f)), o || (n = f = null)) : !o && e.trailing !== !1 && (o = setTimeout(p, w)), a
        }
    return (
        (u.cancel = function () {
            clearTimeout(o), (i = 0), (o = n = f = null)
        }),
        u
    )
}
function zt(r, t, e) {
    var o,
        n,
        f,
        a,
        i,
        p = function () {
            var v = z() - n
            t > v ? (o = setTimeout(p, t - v)) : ((o = null), e || (a = r.apply(i, f)), o || (f = i = null))
        },
        u = d(function (v) {
            return (i = this), (f = v), (n = z()), o || ((o = setTimeout(p, t)), e && (a = r.apply(i, f))), a
        })
    return (
        (u.cancel = function () {
            clearTimeout(o), (o = f = i = null)
        }),
        u
    )
}
function Dt(r, t) {
    return D(t, r)
}
function X1(r) {
    return function () {
        return !r.apply(this, arguments)
    }
}
function Ct() {
    var r = arguments,
        t = r.length - 1
    return function () {
        for (var e = t, o = r[t].apply(this, arguments); e--; ) o = r[e].call(this, o)
        return o
    }
}
function qt(r, t) {
    return function () {
        if (--r < 1) return t.apply(this, arguments)
    }
}
function _r(r, t) {
    var e
    return function () {
        return --r > 0 && (e = t.apply(this, arguments)), r <= 1 && (t = null), e
    }
}
var Re = D(_r, 2)
function Or(r, t, e) {
    t = c(t, e)
    for (var o = l(r), n, f = 0, a = o.length; f < a; f++) if (((n = o[f]), t(r[n], n, r))) return n
}
function Er(r) {
    return function (t, e, o) {
        e = c(e, o)
        for (var n = h1(t), f = r > 0 ? 0 : n - 1; f >= 0 && f < n; f += r) if (e(t[f], f, t)) return f
        return -1
    }
}
var tr = Er(1)
var Hr = Er(-1)
function Ir(r, t, e, o) {
    e = c(e, o, 1)
    for (var n = e(t), f = 0, a = h1(r); f < a; ) {
        var i = Math.floor((f + a) / 2)
        e(r[i]) < n ? (f = i + 1) : (a = i)
    }
    return f
}
function Pr(r, t, e) {
    return function (o, n, f) {
        var a = 0,
            i = h1(o)
        if (typeof f == "number") r > 0 ? (a = f >= 0 ? f : Math.max(f + i, a)) : (i = f >= 0 ? Math.min(f + 1, i) : f + i + 1)
        else if (e && f && i) return (f = e(o, n)), o[f] === n ? f : -1
        if (n !== n) return (f = t(F.call(o, a, i), mr)), f >= 0 ? f + a : -1
        for (f = r > 0 ? a : i - 1; f >= 0 && f < i; f += r) if (o[f] === n) return f
        return -1
    }
}
var Qr = Pr(1, tr, Ir)
var Ve = Pr(-1, Hr)
function er(r, t, e) {
    var o = g1(r) ? tr : Or,
        n = o(r, t, e)
    if (n !== void 0 && n !== -1) return r[n]
}
function kt(r, t) {
    return er(r, S(t))
}
function A(r, t, e) {
    t = N(t, e)
    var o, n
    if (g1(r)) for (o = 0, n = r.length; o < n; o++) t(r[o], o, r)
    else {
        var f = l(r)
        for (o = 0, n = f.length; o < n; o++) t(r[f[o]], f[o], r)
    }
    return r
}
function P(r, t, e) {
    t = c(t, e)
    for (var o = !g1(r) && l(r), n = (o || r).length, f = Array(n), a = 0; a < n; a++) {
        var i = o ? o[a] : a
        f[a] = t(r[i], i, r)
    }
    return f
}
function Br(r) {
    var t = function (e, o, n, f) {
        var a = !g1(e) && l(e),
            i = (a || e).length,
            p = r > 0 ? 0 : i - 1
        for (f || ((n = e[a ? a[p] : p]), (p += r)); p >= 0 && p < i; p += r) {
            var u = a ? a[p] : p
            n = o(n, e[u], u, e)
        }
        return n
    }
    return function (e, o, n, f) {
        var a = arguments.length >= 3
        return t(e, N(o, f, 4), n, a)
    }
}
var Zr = Br(1)
var Ut = Br(-1)
function M1(r, t, e) {
    var o = []
    return (
        (t = c(t, e)),
        A(r, function (n, f, a) {
            t(n, f, a) && o.push(n)
        }),
        o
    )
}
function Wt(r, t, e) {
    return M1(r, X1(c(t)), e)
}
function br(r, t, e) {
    t = c(t, e)
    for (var o = !g1(r) && l(r), n = (o || r).length, f = 0; f < n; f++) {
        var a = o ? o[f] : f
        if (!t(r[a], a, r)) return !1
    }
    return !0
}
function jr(r, t, e) {
    t = c(t, e)
    for (var o = !g1(r) && l(r), n = (o || r).length, f = 0; f < n; f++) {
        var a = o ? o[f] : f
        if (t(r[a], a, r)) return !0
    }
    return !1
}
function O1(r, t, e, o) {
    return g1(r) || (r = B(r)), (typeof e != "number" || o) && (e = 0), Qr(r, t, e) >= 0
}
var ze = d(function (r, t, e) {
    var o, n
    return (
        x(t) ? (n = t) : ((t = L(t)), (o = t.slice(0, -1)), (t = t[t.length - 1])),
        P(r, function (f) {
            var a = n
            if (!a) {
                if ((o && o.length && (f = W1(f, o)), f == null)) return
                a = f[t]
            }
            return a == null ? a : a.apply(f, e)
        })
    )
})
function $(r, t) {
    return P(r, G(t))
}
function Kt(r, t) {
    return M1(r, S(t))
}
function Mr(r, t, e) {
    var o = -1 / 0,
        n = -1 / 0,
        f,
        a
    if (t == null || (typeof t == "number" && typeof r[0] != "object" && r != null)) {
        r = g1(r) ? r : B(r)
        for (var i = 0, p = r.length; i < p; i++) (f = r[i]), f != null && f > o && (o = f)
    } else
        (t = c(t, e)),
            A(r, function (u, v, w) {
                ;(a = t(u, v, w)), (a > n || (a === -1 / 0 && o === -1 / 0)) && ((o = u), (n = a))
            })
    return o
}
function Gt(r, t, e) {
    var o = 1 / 0,
        n = 1 / 0,
        f,
        a
    if (t == null || (typeof t == "number" && typeof r[0] != "object" && r != null)) {
        r = g1(r) ? r : B(r)
        for (var i = 0, p = r.length; i < p; i++) (f = r[i]), f != null && f < o && (o = f)
    } else
        (t = c(t, e)),
            A(r, function (u, v, w) {
                ;(a = t(u, v, w)), (a < n || (a === 1 / 0 && o === 1 / 0)) && ((o = u), (n = a))
            })
    return o
}
var ao = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g
function Tr(r) {
    return r ? (E(r) ? F.call(r) : J(r) ? r.match(ao) : g1(r) ? P(r, K) : B(r)) : []
}
function Lr(r, t, e) {
    if (t == null || e) return g1(r) || (r = B(r)), r[rr(r.length - 1)]
    var o = Tr(r),
        n = h1(o)
    t = Math.max(Math.min(t, n), 0)
    for (var f = n - 1, a = 0; a < t; a++) {
        var i = rr(a, f),
            p = o[a]
        ;(o[a] = o[i]), (o[i] = p)
    }
    return o.slice(0, t)
}
function Xt(r) {
    return Lr(r, 1 / 0)
}
function $t(r, t, e) {
    var o = 0
    return (
        (t = c(t, e)),
        $(
            P(r, function (n, f, a) {
                return {
                    value: n,
                    index: o++,
                    criteria: t(n, f, a),
                }
            }).sort(function (n, f) {
                var a = n.criteria,
                    i = f.criteria
                if (a !== i) {
                    if (a > i || a === void 0) return 1
                    if (a < i || i === void 0) return -1
                }
                return n.index - f.index
            }),
            "value"
        )
    )
}
function V2(r, t) {
    return function (e, o, n) {
        var f = t ? [[], []] : {}
        return (
            (o = c(o, n)),
            A(e, function (a, i) {
                var p = o(a, i, e)
                r(f, a, p)
            }),
            f
        )
    }
}
var De = V2(function (r, t, e) {
    y(r, e) ? r[e].push(t) : (r[e] = [t])
})
var Ce1 = V2(function (r, t, e) {
    r[e] = t
})
var qe = V2(function (r, t, e) {
    y(r, e) ? r[e]++ : (r[e] = 1)
})
var ke1 = V2(function (r, t, e) {
    r[e ? 0 : 1].push(t)
}, !0)
function Yt(r) {
    return r == null ? 0 : g1(r) ? r.length : l(r).length
}
function Jt(r, t, e) {
    return t in e
}
var rt = d(function (r, t) {
    var e = {},
        o = t[0]
    if (r == null) return e
    x(o) ? (t.length > 1 && (o = N(o, t[1])), (t = T(r))) : ((o = Jt), (t = I(t, !1, !1)), (r = Object(r)))
    for (var n = 0, f = t.length; n < f; n++) {
        var a = t[n],
            i = r[a]
        o(i, a, r) && (e[a] = i)
    }
    return e
})
var Ue = d(function (r, t) {
    var e = t[0],
        o
    return (
        x(e)
            ? ((e = X1(e)), t.length > 1 && (o = t[1]))
            : ((t = P(I(t, !1, !1), String)),
              (e = function (n, f) {
                  return !O1(t, f)
              })),
        rt(r, e, o)
    )
})
function Nr(r, t, e) {
    return F.call(r, 0, Math.max(0, r.length - (t == null || e ? 1 : t)))
}
function Fr(r, t, e) {
    return r == null || r.length < 1 ? (t == null || e ? void 0 : []) : t == null || e ? r[0] : Nr(r, r.length - t)
}
function Y2(r, t, e) {
    return F.call(r, t == null || e ? 1 : t)
}
function Ht(r, t, e) {
    return r == null || r.length < 1 ? (t == null || e ? void 0 : []) : t == null || e ? r[r.length - 1] : Y2(r, Math.max(0, r.length - t))
}
function Qt(r) {
    return M1(r, Boolean)
}
function Zt(r, t) {
    return I(r, t, !1)
}
var tt = d(function (r, t) {
    return (
        (t = I(t, !0, !0)),
        M1(r, function (e) {
            return !O1(t, e)
        })
    )
})
var We = d(function (r, t) {
    return tt(r, t)
})
function or(r, t, e, o) {
    ur(t) || ((o = e), (e = t), (t = !1)), e != null && (e = c(e, o))
    for (var n = [], f = [], a = 0, i = h1(r); a < i; a++) {
        var p = r[a],
            u = e ? e(p, a, r) : p
        t && !e ? ((!a || f !== u) && n.push(p), (f = u)) : e ? O1(f, u) || (f.push(u), n.push(p)) : O1(n, p) || n.push(p)
    }
    return n
}
var Ke = d(function (r) {
    return or(I(r, !0, !0))
})
function bt(r) {
    for (var t = [], e = arguments.length, o = 0, n = h1(r); o < n; o++) {
        var f = r[o]
        if (!O1(t, f)) {
            var a
            for (a = 1; a < e && O1(arguments[a], f); a++);
            a === e && t.push(f)
        }
    }
    return t
}
function fr(r) {
    for (var t = (r && Mr(r, h1).length) || 0, e = Array(t), o = 0; o < t; o++) e[o] = $(r, o)
    return e
}
var Ge = d(fr)
function jt(r, t) {
    for (var e = {}, o = 0, n = h1(r); o < n; o++) t ? (e[r[o]] = t[o]) : (e[r[o][0]] = r[o][1])
    return e
}
function re1(r, t, e) {
    t == null && ((t = r || 0), (r = 0)), e || (e = t < r ? -1 : 1)
    for (var o = Math.max(Math.ceil((t - r) / e), 0), n = Array(o), f = 0; f < o; f++, r += e) n[f] = r
    return n
}
function te1(r, t) {
    if (t == null || t < 1) return []
    for (var e = [], o = 0, n = r.length; o < n; ) e.push(F.call(r, o, (o += t)))
    return e
}
function nr(r, t) {
    return r._chain ? m1(t).chain() : t
}
function Sr(r) {
    return (
        A(b1(r), function (t) {
            var e = (m1[t] = r[t])
            m1.prototype[t] = function () {
                var o = [this._wrapped]
                return ae1.apply(o, arguments), nr(this, e.apply(m1, o))
            }
        }),
        m1
    )
}
A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (r) {
    var t = ar[r]
    m1.prototype[r] = function () {
        var e = this._wrapped
        return e != null && (t.apply(e, arguments), (r === "shift" || r === "splice") && e.length === 0 && delete e[0]), nr(this, e)
    }
})
A(["concat", "join", "slice"], function (r) {
    var t = ar[r]
    m1.prototype[r] = function () {
        var e = this._wrapped
        return e != null && (e = t.apply(e, arguments)), nr(this, e)
    }
})
var Xe = m1
var oe1 = Sr(ee1)
oe1._ = oe1
var io = oe1
const __1$ = mod49.default ?? mod49
var $1 = Object.create
var G1 = Object.defineProperty
var j2 = Object.getOwnPropertyDescriptor
var rr1 = Object.getOwnPropertyNames
var er1 = Object.getPrototypeOf,
    tr1 = Object.prototype.hasOwnProperty
;((r) =>
    typeof require < "u"
        ? require
        : typeof Proxy < "u"
        ? new Proxy(r, {
              get: (e, t) => (typeof require < "u" ? require : e)[t],
          })
        : r)(function (r) {
    if (typeof require < "u") return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + r + '" is not supported')
})
var k2 = (r, e) => () => (
        e ||
            r(
                (e = {
                    exports: {},
                }).exports,
                e
            ),
        e.exports
    ),
    nr1 = (r, e) => {
        for (var t in e)
            G1(r, t, {
                get: e[t],
                enumerable: !0,
            })
    },
    M2 = (r, e, t, i) => {
        if ((e && typeof e == "object") || typeof e == "function")
            for (let n of rr1(e))
                !tr1.call(r, n) &&
                    n !== t &&
                    G1(r, n, {
                        get: () => e[n],
                        enumerable: !(i = j2(e, n)) || i.enumerable,
                    })
        return r
    },
    x1 = (r, e, t) => (M2(r, e, "default"), t && M2(t, e, "default")),
    L1 = (r, e, t) => (
        (t = r != null ? $1(er1(r)) : {}),
        M2(
            e || !r || !r.__esModule
                ? G1(t, "default", {
                      value: r,
                      enumerable: !0,
                  })
                : t,
            r
        )
    )
var R1 = k2((kr, y) => {
    var a = io
    Array.prototype.AllValuesSame = function () {
        if (this.length > 0) {
            for (var r = 1; r < this.length; r++) if (this[r] !== this[0]) return !1
        }
        return !0
    }
    var O = function (r, e, t, i) {
            var n = a.pluck(r, e),
                u = D(a.pluck(r, t)),
                l = r.length,
                f = F(r[0][e])
            if (f == "float" || f == "int") {
                var h = a.min(n),
                    s = a.max(n),
                    o = n.map(function (C) {
                        for (var p = [], g = 0; g < i; g++) {
                            var d = cr(h, s),
                                b = u - ar(r, e, t, d)
                            p.push({
                                feature: e,
                                gain: b,
                                cut: d,
                            })
                        }
                        return a.max(p, function (v) {
                            return v.gain
                        })
                    })
                return a.max(o, function (C) {
                    return C.gain
                })
            } else {
                var o = n.map(function (p) {
                        var g = r.filter(function (d) {
                            return d[e] === p
                        })
                        return (g.length / l) * D(a.pluck(g, t))
                    }),
                    _ = o.reduce(function (p, g) {
                        return p + g
                    }, 0)
                return {
                    feature: e,
                    gain: u - _,
                    cut: 0,
                }
            }
        },
        ir = function (r, e, t, i) {
            for (var n = [], u = 0; u < e.length; u++) n.push(O(r, e[u], t, i))
            return a.pluck(n, "gain").AllValuesSame
                ? n[vr(0, n.length)]
                : a.max(n, function (l) {
                      return l.gain
                  })
        },
        A = function (r) {
            return a
                .sortBy(r, function (e) {
                    return ur(e, r)
                })
                .reverse()[0]
        },
        ur = function (r, e) {
            return a.filter(e, function (t) {
                return t === r
            }).length
        },
        D = function (r) {
            var e = a.unique(r),
                t = e.map(function (n) {
                    return sr(n, r)
                }),
                i = t.map(function (n) {
                    return -n * lr(n)
                })
            return i.reduce(function (n, u) {
                return n + u
            }, 0)
        },
        ar = function (r, e, t, i) {
            var n = r.filter(function (f) {
                    return f[e] <= i
                }),
                u = r.filter(function (f) {
                    return f[e] > i
                }),
                l = r.length
            return (n.length / l) * D(a.pluck(n, t)) + (u.length / l) * D(a.pluck(n, t))
        },
        lr = function (r) {
            return Math.log(r) / Math.log(2)
        },
        sr = function (r, e) {
            var t = a.filter(e, function (i) {
                return i === r
            }).length
            return t / e.length
        },
        c = function () {
            return "_r" + Math.round(Math.random() * 1e6).toString()
        },
        F = function (r) {
            var e = /[\d]+(\.[\d]+)?/.exec(r)
            return e ? (e[1] ? "float" : "int") : "string"
        },
        or = function (r) {
            var e = r.reduce(function (i, n) {
                    return i + n
                }),
                t = e / r.length
            return t
        },
        q = function (r, e, t, i, n) {
            var u = {},
                l = a.pluck(r, t)
            if (l.length == 1)
                return {
                    type: "result",
                    val: l[0],
                    name: l[0],
                    alias: l[0] + c(),
                }
            if (l.length == 0)
                return {
                    type: "result",
                    val: i,
                    name: i,
                    alias: i + c(),
                }
            if (e === !0) {
                var f = A(l)
                return {
                    type: "result",
                    val: f,
                    name: f,
                    alias: f + c(),
                }
            }
            ;(!e || e.length == 0) &&
                (e = a.reject(a.keys(r[0]), function (v) {
                    return v == t
                }))
            var h = ir(r, e, t, n),
                s = h.feature,
                o = a.without(e, s),
                _ = F(r[0][s])
            if (_ == "float" || _ == "int") {
                ;(u = {
                    name: s,
                    alias: s + c(),
                    cut: h.cut,
                    type: "feature_real",
                    vals: [],
                }),
                    o.length == 0 && (o = !0)
                var C = r.filter(function (v) {
                        return v[s] > h.cut
                    }),
                    p = {
                        name: u.cut.toString(),
                        alias: ">" + u.cut.toString() + c(),
                        type: "feature_value",
                    }
                ;(p.child = q(C, o, t, i, n)), u.vals.push(p)
                var g = r.filter(function (v) {
                        return v[s] <= h.cut
                    }),
                    d = {
                        name: u.cut.toString(),
                        alias: "<=" + u.cut.toString() + c(),
                        type: "feature_value",
                    }
                ;(d.child = q(g, o, t, i, n)), u.vals.push(d)
            } else {
                var b = (b = a.unique(a.pluck(r, s)))
                ;(u = {
                    name: s,
                    alias: s + c(),
                    type: "feature",
                    vals: [],
                }),
                    (u.vals = a.map(b, function (v) {
                        var Y = r.filter(function (Z) {
                                return Z[s] == v
                            }),
                            E = {
                                name: v,
                                alias: v + c(),
                                type: "feature_value",
                            }
                        return o.length == 0 && (o = !0), (E.child = q(Y, o, t, i, n)), E
                    }))
            }
            return u
        },
        V = function (r, e, t) {
            var i = a.unique(a.pluck(r, t))
            if (i.length == 1)
                return {
                    type: "result",
                    val: i[0],
                    name: i[0],
                    alias: i[0] + c(),
                }
            if (e === !0 || i.length == 0) {
                var n = A(a.pluck(r, t))
                return {
                    type: "result",
                    val: n,
                    name: n,
                    alias: n + c(),
                }
            }
            ;(!e || e.length == 0) &&
                (e = a.reject(a.keys(r[0]), function (s) {
                    return s == t
                }))
            var u = a.max(e, function (s) {
                    return O(r, s, t).gain
                }),
                l = a.without(e, u),
                f = a.unique(a.pluck(r, u)),
                h = {
                    name: u,
                    alias: u + c(),
                    type: "feature",
                }
            return (
                (h.vals = a.map(f, function (s) {
                    var o = r.filter(function (C) {
                            return C[u] == s
                        }),
                        _ = {
                            name: s,
                            alias: s + c(),
                            type: "feature_value",
                        }
                    return l.length == 0 && (l = !0), (_.child = V(o, l, t)), _
                })),
                h
            )
        },
        B = function (r) {
            if (r && r.children)
                for (var t = 0; t < r.children.length; t++) {
                    var i = ""
                    r.children[t].alias.indexOf("<=") === 0 ? (i += "<= ") : r.children[t].alias.indexOf(">") === 0 && (i += "> "), (i += r.children[t].name), r.children[t].child && r.children[t].child.vals ? ((r.children[t].children = r.children[t].child.vals), (r.children[t] = B(r.children[t]))) : r.children[t].child && r.children[t].child.type == "result" && (i += " " + r.children[t].child.val), (r.children[t].name = i)
                }
            return r
        },
        fr = function (r) {
            for (var e = [], t = 0; t < r.length; t++)
                (e[t] = {
                    name: r[t].model.name,
                    children: r[t].model.vals,
                }),
                    (e[t] = B(e[t]))
            return e
        },
        cr = function (r, e) {
            return Math.random() * (e - r) + r
        },
        vr = function (r, e) {
            return Math.floor(Math.random() * (e - r) + r)
        }
    y.exports.ID3 = V
    y.exports.C45 = q
    y.exports.GetType = F
    y.exports.GetDominate = A
    y.exports.Average = or
    y.exports.d3ifyModel = fr
})
var S1 = k2((qr, K) => {
    var P = io,
        H = R1(),
        J = function (r) {
            ;(this.criterion = r.criterion || "entropy"), (this.splitter = r.splitter || "best"), (this.min_samples_split = r.min_samples_split || 2), (this.min_samples_leaf = r.min_samples_leaf || 1), (this.num_tries = r.num_tries || 10)
        }
    J.prototype = {
        fit: function (r, e, t) {
            var i = H.GetDominate(P.pluck(r, t))
            return H.C45(r, e, t, i, this.num_tries)
        },
        predict(testData) {
            var activeModel = this.model
            console.debug(`typeof activeModel is:`,typeof activeModel)
            if (!activeModel) {
                return null
            }
            var n
            for (; activeModel?.type !== "result"; ) {
                const modelName = activeModel?.name
                if (activeModel?.type === "feature_real") {
                    var i = parseFloat(testData[modelName])
                    i <= activeModel.cut ? (n = activeModel.vals[1]) : (n = activeModel.vals[0])
                } else {
                    var i = testData[modelName]
                    var n = P.detect(activeModel?.vals, (l)=>l.name==i)
                    console.debug(`P.detect: n is:`,n)
                }
                activeModel = n?.child
            }
            return activeModel?.val
        },
    }
    K.exports = J
})
var U2 = k2((Dr, Q) => {
    var hr = __1$,
        w = R1(),
        pr = S1(),
        N = function (r) {
            ;(this.n_estimators = r.n_estimators || 10), (this.criterion = r.criterion || "entropy"), (this.max_features = r.max_features || "auto"), (this.min_samples_split = r.min_samples_split || 2), (this.min_samples_leaf = r.min_samples_leaf || 1), (this.verbose = this.verbose || 0)
        },
        gr = function (r, e, t) {
            return function (i, n) {
                var u = new pr({}),
                    l = u.fit(r, e, t)
                ;(u.model = l), n(null, u)
            }
        }
    N.prototype = {
        fit: function (r, e, t, i) {
            hr.times(this.n_estimators, gr(r, e, t), function (n, u) {
                n && console.log(n), i(n, u)
            })
        },
        predict: function (r, e) {
            this.trees = e
            for (var t = new Array(r.length), i = 0; i < r.length; i++) {
                for (var n = [], u = 0; u < this.n_estimators; u++) n.push(e[i].predict(r[i]))
                w.GetType(n[0]) == "string" ? (t[i] = w.GetDominate(n)) : (t[i] = w.Average(n))
            }
            return t
        },
    }
    Q.exports = N
})
var z1 = k2((Mr, I) => {
    var mr = U2(),
        _r = S1()
    I.exports.RandomForestClassifier = mr
    I.exports.DecisionTreeClassifier = _r
})
var m2 = {}
nr1(m2, {
    DecisionTreeClassifier: () => xr1,
    RandomForestClassifier: () => dr1,
    default: () => Cr1,
})
var X2 = L1(z1())
x1(m2, L1(z1()))
var { RandomForestClassifier: dr1, DecisionTreeClassifier: xr1 } = X2,
    { default: W2, ...yr1 } = X2,
    Cr1 = W2 !== void 0 ? W2 : yr1
class RandomForest {
    constructor({ numberOfTrees }) {
        this.numberOfTrees = numberOfTrees
        this._classifier = new dr1({
            n_estimators: this.numberOfTrees,
        })
        this.trees = null
    }
    async fit({ data, inputAttributes, attributeToPredict }) {
        return new Promise((resolve, reject) => {
            this._classifier.fit(data, inputAttributes, attributeToPredict, (err, trees) => {
                if (err) {
                    reject(err)
                } else {
                    this.trees = trees
                    resolve(this)
                }
            })
        })
    }
    predict(data) {
        if (!this.trees) {
            throw Error(`RandomForest: something called .predict() before calling .fit(); I can't make a prediction without data.\nMake sure to do await forest.fit() and not just forest.fit()`)
        }
        return this._classifier.predict(data, this.trees)
    }
}
export { RandomForest as RandomForest }
