export function useCounter(initialValue: number, testComment: string) {
  const count = ref(initialValue);
  //   const comment = ref(testComment);
  // refやreactiveを用いないとpropertyをwatchしてくれない。 useStateとほぼ同じ。
  let comment = testComment;
  const inc = () => count.value++;
  const dec = () => count.value--;
  //   const handleEditComment = () =>
  //     (comment.value = comment.value + '加筆しました.');
  const handleEditComment = () => {
    comment = testComment + '加筆しました！！';
  };

  return {
    count,
    comment,
    inc,
    dec,
    handleEditComment,
  };
}
