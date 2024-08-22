import { SimpleWidget } from '@/components/SimpleWidget/SimpleWidget';

export default function DashboardMain() {
  return (
    <>
      <h1 className='text-center p-10 text-4xl font-bold text-black underline'>
        WELCOME TO POKEMONS PAGE
      </h1>
      <section className='flex flex-row justify-center py-5'>
        <SimpleWidget title='Contador' subtitle='pokemon name' />
      </section>
    </>
  );
}
