import { Vaultier } from '../src/client';

(async () => {
  await new Vaultier().store('xxx', { a: '1', b: '2' , aasas: 'sdasdasdasd'});
  process.exit(0);
})();
