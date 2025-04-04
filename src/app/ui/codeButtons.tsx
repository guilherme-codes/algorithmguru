type CodeButtonsProps = { 
  languages: Array<{ name: string; ext: string }> 
}

export default function CodeButtons({ languages }: CodeButtonsProps) {  
  return (
    <div className="flex gap-3">
      {languages.map((language) => (
        <button key={language.name} className={`code-button code-button--active ${language.name}`}>
          <img className="h-[53px] w-[53px]" src={`/img/${language.name}.svg`} alt="Code" />
        </button>
      ))}
    </div>
  )
}