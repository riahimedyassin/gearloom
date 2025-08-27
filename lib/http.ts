import { NextResponse } from "next/server";
interface httpResponse {
  body: any;
  status: number;
}

interface errorHttpResponse {
  status: number;
  error: any;
}

export function createHttpResponse({ body, status }: httpResponse) {
  return NextResponse.json(
    {
      data: body,
      status,
    },
    {
      status,
    }
  );
}

export function createErrorHttpResponse({ error, status }: errorHttpResponse) {
  return NextResponse.json(
    {
      error: error,
      status,
    },
    {
      status,
    }
  );
}

interface response extends Omit<httpResponse, "status"> {}
interface error extends Omit<errorHttpResponse, "status"> {}

export function OK({ body }: response) {
  return createHttpResponse({ body, status: 200 });
}

export function Created({ body }: response) {
  return createHttpResponse({ body, status: 201 });
}

export function InternalServerError({ error }: error) {
  return createErrorHttpResponse({ error, status: 500 });
}

export function NotFound({ error }: error) {
  return createErrorHttpResponse({ error, status: 400 });
}
