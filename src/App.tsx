import Logo from './assets/logo-nlw-expert.svg';
import { NoteCard } from './components/Note-card';

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt="NLW Expert" />
      <form className='w-full'>
        <input 
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          type="text" 
          name="" id="" 
          placeholder='Busque em suas notas...' />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
          <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </div>

        <NoteCard />
      </div>
    </div>
  )
}