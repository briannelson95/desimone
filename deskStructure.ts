import { ControlsIcon, HomeIcon, DocumentsIcon, CogIcon, CodeBlockIcon, MenuIcon, ImagesIcon, PlayIcon } from '@sanity/icons'

export const myStructure = (S: any) => 
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title("Site Settings")
                .icon(ControlsIcon)
                .child(
                    S.editor()
                        .schemaType("siteSettings")
                        .documentId("siteSettings")
                ),
            S.divider(),
            S.documentTypeListItem("pages").title("Pages").icon(DocumentsIcon),
            S.listItem()
                .title('Portfolio')
                .icon(PlayIcon)
                .child(
                    S.editor()
                        .schemaType("portfolio")
                        .documentId("portfolio")
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem: any) => !['siteSettings', 'pages', 'portfolio'].includes(listItem.getId())
            )
        ])