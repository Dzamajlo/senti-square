// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare function fetch<ResponseType = any>(
  input: RequestInfo | URL,
  init?: RequestInit &
    MethodBodyCombination & {
      headers?: RequestInit['headers'] & PreparedHeaders;
    },
): Promise<TypedResponse<ResponseType>>;

interface TypedResponse<T> extends Response {
  json(): Promise<T>;
}

type PreparedHeaders = Partial<{
  Authorization: `Bearer ${string}`;
  'Content-Type': MimeTypes;
  Accept: MimeTypes;
}>;

type MethodBodyCombination =
  | {
      method?: WithBody;
      body?: RequestInit['body'];
    }
  | {
      method?: NonBody;
      body?: never;
    };

type WithBody = Extract<HttpVerbs, 'POST' | 'PUT' | 'DELETE' | 'UPDATE'>;
type NonBody = Exclude<HttpVerbs, WithBody>;

type HttpVerbs =
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'UPDATE'
  | 'GET'
  | 'CONNECT'
  | 'HEAD'
  | 'OPTIONS';

type MimeTypes =
  | '.jpg'
  | '.midi'
  | 'XML'
  | 'application/epub+zip'
  | 'application/gzip'
  | 'application/java-archive'
  | 'application/json'
  | 'application/ld+json'
  | 'application/msword'
  | 'application/octet-stream'
  | 'application/ogg'
  | 'application/pdf'
  | 'application/php'
  | 'application/rtf'
  | 'application/vnd.amazon.ebook'
  | 'application/vnd.apple.installer+xml'
  | 'application/vnd.mozilla.xul+xml'
  | 'application/vnd.ms-excel'
  | 'application/vnd.ms-fontobject'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.oasis.opendocument.presentation'
  | 'application/vnd.oasis.opendocument.spreadsheet'
  | 'application/vnd.oasis.opendocument.text'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.rar'
  | 'application/vnd.visio'
  | 'application/x-www-form-urlencoded'
  | 'application/x-abiword'
  | 'application/x-bzip'
  | 'application/x-bzip2'
  | 'application/x-csh'
  | 'application/x-freearc'
  | 'application/x-sh'
  | 'application/x-shockwave-flash'
  | 'application/x-tar'
  | 'application/x-7z-compressed'
  | 'application/xhtml+xml'
  | 'application/zip'
  | 'audio/aac'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/opus'
  | 'audio/wav'
  | 'audio/webm'
  | 'font/otf'
  | 'font/ttf'
  | 'font/woff'
  | 'font/woff2'
  | 'image/bmp'
  | 'image/gif'
  | 'image/png'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/vnd.microsoft.icon'
  | 'image/webp'
  | 'text/calendar'
  | 'text/css'
  | 'text/csv'
  | 'text/html'
  | 'text/javascript'
  | 'text/plain'
  | 'video/3gpp'
  | 'video/3gpp2'
  | 'video/mp2t'
  | 'video/mpeg'
  | 'video/ogg'
  | 'video/webm'
  | 'video/x-msvideo';
