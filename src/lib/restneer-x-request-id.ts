import { v4 as UUIDV4 } from "uuid";

class RestneerXRequestId {

    public static middleware(req, res, next): void {
        // Request
        const xRequestId = req.header("X-Request-Id") || UUIDV4();
        // Response
        res.header("X-Request-Id", xRequestId);
        return next();
    }
}

export default RestneerXRequestId;
