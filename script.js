document.addEventListener('DOMContentLoaded', () => {
  const CORRECT_SEQUENCE = 'MKTAYIAKQRQISFVKSHFSRQDILDLWIYHTQGYFP';
  const VALID_AMINO_ACIDS = 'ARNDCQEGHILKMFPSTWYV';

  const sequenceInput = document.getElementById('sequenceInput');
  const checkButton = document.getElementById('checkButton');
  const resultArea = document.getElementById('resultArea');

  const validAminoAcidsSet = new Set(VALID_AMINO_ACIDS.split(''));

  // 入力を比較用に整形する。
  function normalizeSequence(value) {
    return value.toUpperCase().replace(/[\s\t\n\r]+/g, '');
  }

  // 結果表示の見た目を切り替える。
  function setResult(message, type) {
    resultArea.textContent = message;
    resultArea.className = `result result-${type}`;
  }

  function checkSequence() {
    const normalizedSequence = normalizeSequence(sequenceInput.value);

    if (normalizedSequence.length === 0) {
      setResult('アミノ酸配列を入力してください。', 'warning');
      return;
    }

    const hasInvalidCharacter = Array.from(normalizedSequence).some((character) => !validAminoAcidsSet.has(character));

    if (hasInvalidCharacter) {
      setResult('無効な文字が含まれています。アミノ酸1文字表記で入力してください。', 'error');
      return;
    }

    if (normalizedSequence === CORRECT_SEQUENCE) {
      setResult('正解です。入力されたアミノ酸配列は正解配列と一致しています。', 'success');
      return;
    }

    setResult(
      `不正解です。入力されたアミノ酸配列は正解配列と一致していません。\n入力配列の長さ: ${normalizedSequence.length}\n正解配列の長さ: ${CORRECT_SEQUENCE.length}`,
      'error'
    );
  }

  checkButton.addEventListener('click', checkSequence);
});
