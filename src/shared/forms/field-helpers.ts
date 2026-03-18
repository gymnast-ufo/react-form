import Joi from 'joi'

const defaultStringNormalizer = (value?: string | null, spaceAllowed = true) =>
  (value || '').replace(/(\s)+/g, spaceAllowed ? '$1' : '').trim()

export const stringField = {
  schema: (spaceAllowed = true) =>
    Joi.string()
      .trim()
      .replace(/(\s)+/g, spaceAllowed ? '$1' : '')
      .messages(localizedMessages),
  parse: defaultStringNormalizer,
  prepare: defaultStringNormalizer,
}

export const numberField = {
  schema: () => Joi.number().messages(localizedMessages),
  parse: (v?: string | number | null) =>
    (!isNaN(Number(v)) ? Number(v).toString() : undefined) as number | undefined,
  prepare: (v?: string | number | null) => Number(v) || undefined,
}

export const localizedMessages = {
  'string.base': '{{#label}} должно быть строкой',
  'string.empty': '{{#label}} не может быть пустым',
  'string.min': 'Минимальная длина {#limit}',
  'string.max': 'Максимальная длина {#limit}',
  'string.pattern.base': 'Неверный формат',
  'any.only': '{{#label}} должно быть одним из {{#valids}}',
  'any.required': 'Обязательное поле',
  'any.custom': '{{#label}} {{#error.message}}',
  'number.base': 'Должно быть числом',
  'number.min': 'Минимальное значение {#limit}',
}
