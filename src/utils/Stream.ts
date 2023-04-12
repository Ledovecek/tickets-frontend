export async function readableStreamToString(readableStream: ReadableStream<Uint8Array> | null): Promise<string> {
    if (readableStream !== null) {
        const decoder = new TextDecoder();
        const reader = readableStream.getReader();
        let result = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            result += decoder.decode(value);
        }
        return result;
    }
    return "";
}
