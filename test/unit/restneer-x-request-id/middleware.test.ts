import { expect } from "chai";
import * as sinon from "sinon";
import { v4 as UUIDV4 } from "uuid";
import RestneerXRequestId from "../../../src/lib/restneer-x-request-id";

describe("class RestneerXRequestId", ()  => {
    const req = {
        headers: {},
        header: key => {
         return req.headers[key];
        }
     };

    const res = {
        headers: {},
        header: (key, value = undefined) => {
             if (value) {
                 res.headers[key] = value;
             }
             return res.headers[key];
         }
     };
    let next;

    it("checks if contains no X-Request-Id header in request", done => {
        next = sinon.spy();
        RestneerXRequestId.middleware(req, res, next);
        expect(res.header("X-Request-Id")).to.not.be.undefined;
        expect(next.called).to.be.true;
        done();
    });

    it("checks if contains X-Request-Id header in request", done => {
        req.headers["X-Request-Id"] = UUIDV4();
        next = sinon.spy();
        RestneerXRequestId.middleware(req, res, next);
        expect(req.header("X-Request-Id")).to.be.equal(res.header("X-Request-Id"));
        expect(next.called).to.be.true;
        done();
    });

});
