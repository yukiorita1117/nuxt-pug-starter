/**
 *
 * @return メッセージ
 *
 */
export default defineNuxtPlugin(() => {
  return {
    provide: {
      prefix(message: string) {
        return `この文字列は必ず先頭に付く:: ${message}`;
      },
    },
  };
});
