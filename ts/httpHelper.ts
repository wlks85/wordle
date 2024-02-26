export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
  method: HttpMethods;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export async function HttpRequestHelper(url: string, options: RequestOptions): Promise<any> {
  try {
    const baseUrl = `${document.location.origin}/api`;

    const response = await fetch(`${baseUrl}/${url}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error: any) {
    throw new Error(`Request failed: ${error.message}`);
  }
}
