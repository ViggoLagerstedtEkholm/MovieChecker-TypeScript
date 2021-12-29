export const Highlight = (text: string, highlight: string) =>{
    highlight = highlight.toString();
    const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
    return <span> { parts.map((part, i) =>
        <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ?  'highlightText' : '' }>
            { part }
        </span>)
    } </span>;
}