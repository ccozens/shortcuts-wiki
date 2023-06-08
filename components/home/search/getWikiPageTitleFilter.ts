 // function to filter titles according to input value
 export default function getWikiPageTitleFilter(inputValue?: string) {
    const lowerCasedInputValue = (inputValue || "").toLowerCase();
    return function titleFilter(wikiPage: string) {
      return (
        !inputValue || wikiPage.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }