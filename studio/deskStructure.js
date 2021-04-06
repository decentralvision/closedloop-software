import S from '@sanity/desk-tool/structure-builder';
import {
    MdSettings,
    MdExtension,
    MdContactMail,
    MdVideoLibrary,
    MdPolymer,
    MdDonutSmall,
    MdBrokenImage,
} from 'react-icons/md';

const hiddenTypes = ['metadata', 'contact', 'video', 'platforms', 'solutions', 'desk'];

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
                            S.listItem()
                                .title('Platforms')
                                .icon(MdPolymer)
                                .child(
                                    S.editor()
                                        .id('platforms')
                                        .schemaType('platforms')
                                        .documentId('platforms'),
                                ),
                            S.listItem()
                                .title('Solutions')
                                .icon(MdDonutSmall)
                                .child(
                                    S.editor()
                                        .id('solutions')
                                        .schemaType('solutions')
                                        .documentId('solutions'),
                                ),
                            S.listItem()
                                .title('Desk')
                                .icon(MdBrokenImage)
                                .child(S.editor().id('desk').schemaType('desk').documentId('desk')),
                        ]),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) => !hiddenTypes.includes(listItem.getId()),
            ),
        ]);
