export async function requestRaw(url: string, method: string, headers: {[k:string]: string}, body: any, type: string): Promise<Response> {
    const result = fetch("https://zv7i.dev/zproxy", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "url": url,
            "reqheaders": headers,
            "reqbody": body,
            "reqtype": type,
            "reqmethod": method
        })
    });
    return result;
}

export async function request(url: string, method: string, headers: {[k:string]:string}, body: any, type: string): Promise<string|ArrayBuffer|unknown> {
    const response = await requestRaw(url, method, headers, body, type);
    if (type === "json") {
        return response.json();
    } else if (type === "text") {
        return response.text();
    } else if (type === "buffer") {
        return response.arrayBuffer();
    }
}