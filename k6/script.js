import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,
  duration: '10s',
};

export default function () {
  let res = http.get('http://18.214.171.163:8080');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
