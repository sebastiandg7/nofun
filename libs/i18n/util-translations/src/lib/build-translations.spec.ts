import { Translations, buildI18NResource } from './build-i18n-resource';

describe('buildI18NResource', () => {
  it('should work', () => {
    const mockNamespace = 'my-namespace';
    const mockTranslations: Translations<{ home: { title: string } }> = {
      en: {
        home: {
          title: 'Nofun Games',
        },
      },
      es: {
        home: {
          title: 'Nofun Juegos',
        },
      },
    };
    expect(
      buildI18NResource({
        namespace: mockNamespace,
        translations: mockTranslations,
      })
    ).toEqual({
      namespace: mockNamespace,
      langTranslations: {
        en: {
          home: {
            title: 'Nofun Games',
          },
        },
        es: {
          home: {
            title: 'Nofun Juegos',
          },
        },
      },
    });
  });
});
