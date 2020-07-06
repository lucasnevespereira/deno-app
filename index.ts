import { opine } from 'https://deno.land/x/opine@0.12.0/mod.ts';

const app = opine();

app.get('/', (req, res) => {
  res.send('Deno Sample');
});

const PORT = 3000;

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
