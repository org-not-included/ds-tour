const pdfViewer = (h, word) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";    
    let maxHeight = 0
    for (let i = 0; i < word.length; i++){
      if (h[letters.indexOf(word[i])] > maxHeight) {
        maxHeight = h[letters.indexOf(word[i])]
      }
    }    
    return maxHeight * word.length;
}