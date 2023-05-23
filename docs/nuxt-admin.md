# 项目中使用到的库

## 图标
- [图标文档](https://icones.js.org/)
- [Nuxt Icon 文档](https://nuxt.com/modules/icon)
- 使用方法
  ```html
    <Icon name="uil:github" color="black" size="20" />
  ```

## 国际化
- [@nuxt/i18n V8 文档](https://v8.i18n.nuxtjs.org/getting-started/setup)
- 使用方法
  ```typescript
    // t('key')
    // setLocale('en')
    // 当前 locale
    // 所有支持的locales
    // ... 更多内容参考官方文档
    const { t, setLocale, locale, locales } = useI18n()
  ```

## 主题方案