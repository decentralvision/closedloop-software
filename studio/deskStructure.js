import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdExtension, MdContactMail } from 'react-icons/md';

const hiddenTypes = ['metadata', 'contact'];

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Metadata')
                .icon(MdSettings)
                .child(S.editor().id('metadata').schemaType('metadata').documentId('metadata')),
            S.listItem()
                .title('Section')
                .icon(MdExtension)
                .child(
                    S.list()
                        .title('Section')
                        .items([
                            S.listItem()
                                .title('Contact')
                                .icon(MdContactMail)
                                .child(
                                    S.editor()
                                        .id('contact')
                                        .schemaType('contact')
                                        .documentId('contact'),
                                ),
                        ]),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) => !hiddenTypes.includes(listItem.getId()),
            ),
        ]);
