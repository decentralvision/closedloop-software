import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdExtension, MdContactMail, MdVideoLibrary } from 'react-icons/md';

const hiddenTypes = ['metadata', 'contact', 'video'];

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
                                .title('Video')
                                .icon(MdVideoLibrary)
                                .child(
                                    S.editor().id('video').schemaType('video').documentId('video'),
                                ),
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
