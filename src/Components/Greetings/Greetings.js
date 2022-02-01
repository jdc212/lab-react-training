export function Greetings(props){
  function language(lang, children) {
  if (lang === "de") {
      return  `Hallo ${children}`
    } else if (lang === "fr") {
      return  `Bonjour ${children}`
    } else if (lang === "en") {
      return  `Hello ${children}`
    } else if (lang === "es") {
        return  `Holla ${children}`
      };
    }  
      return (
    <div>
    <h2>{language(props.lang,props.children)}</h2>
    </div>)
}
