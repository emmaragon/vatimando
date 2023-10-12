import { HttpParams } from "@angular/common/http";
import * as moment from "moment";

export function serialize(filterSet: any, discardEmptyOrNull = true) {
  let params = new HttpParams();

  for (const key of Object.keys(filterSet)) {
    const value = filterSet[key];
    if (discardEmptyOrNull && (value === "" || value == null)) {
      continue;
    }
    if (Array.isArray(value)) {
      value.forEach((x: any) => (params = params.append(key, x)));
    } else if (moment.isDate(value)) {
      params = params.set(key, moment(value).format("YYYY-MM-DD"));
    } else if (moment.isMoment(value)) {
      params = params.set(key, value.format("YYYY-MM-DD"));
    } else {
      params = params.set(key, value);
    }
  }

  return params;
}

export function getFilenameFromContentDisposition(disposition: string) {
  const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = filenameRegex.exec(disposition);

  if (matches != null && matches[1]) {
    return matches[1].replace(/['"]/g, "");
  }
  return null;
}

export function decodeJwt(token: string | null) {
  if (!token) {
    return null;
  }

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  const payload = JSON.parse(jsonPayload);
  payload.exp = new Date(new Date(0).setUTCSeconds(payload.exp));
  return payload;
}
