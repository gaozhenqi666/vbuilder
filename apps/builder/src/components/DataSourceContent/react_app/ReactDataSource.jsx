import '@glideapps/glide-data-grid/dist/index.css'

import { DataEditor, GridCellKind, GridColumnIcon } from '@glideapps/glide-data-grid'
import { useEffect, useMemo, useRef, useState } from 'react'

const tempDataPool = [
    {
        id: '001',
        name: '合一',
        age: '15',
        isOpen: true,
        hobby: ['football', 'swimming'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: '**This is a markdown cell**'
    },
    {
        id: '002',
        name: '合二',
        age: '18',
        isOpen: true,
        hobby: ['basketball', 'swimming'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: 'true'
    },
    {
        id: '003',
        name: '合三',
        age: '23',
        isOpen: false,
        hobby: ['basketball'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: 'true'
    },
    {
        id: '004',
        name: '合四',
        age: '25',
        isOpen: true,
        hobby: ['swimming'],
        avatar: ['https://i.pravatar.cc/300'],
        notes: 'true'
    }
]

// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides
const columns = [
    { title: 'ID', width: 100, icon: GridColumnIcon.HeaderRowID },
    { title: '姓名', width: 100, icon: GridColumnIcon.HeaderTextTemplate },
    { title: '年龄', width: 100 },
    { title: '状态', width: 50 },
    { title: '爱好', width: 200 },
    { title: '头像', width: 200 },
    { title: '笔记', width: 200 }
]

export default function ReactDataSource(props) {
    const dsId = props.id
    const ref = useRef(null)

    const data = useMemo(() => {
        const len = dsId === '1' ? 1000000 : dsId === '2' ? 100000 : 10
        const tempDataList = new Array(len).fill(0)
        return tempDataList.map((item, index) => {
            const randomIndex = Math.floor(Math.random() * 4)
            const randomItem = tempDataPool[randomIndex]
            return {
                ...randomItem,
                id: `00${index}`,
                name: `合${Math.random().toString(36).substr(2, 2)}`,
                avatar: [`https://i.pravatar.cc/300?img=${index}`]
            }
        })
    }, [dsId])

    // If fetching data is slow you can use the DataEditor ref to send updates for cells
    // once data is loaded.
    const getData = ([col, row]) => {
        const person = data[row]

        switch (col) {
            case 0: {
                return {
                    kind: GridCellKind.RowID,
                    data: person.id,
                    allowOverlay: false,
                    displayData: person.id
                }
            }

            case 1: {
                return {
                    kind: GridCellKind.Text,
                    data: person.name,
                    allowOverlay: true,
                    displayData: person.name,
                    hasMenu: true
                }
            }

            case 2: {
                return {
                    kind: GridCellKind.Number,
                    data: person.age,
                    allowOverlay: true,
                    displayData: person.age
                }
            }

            case 3: {
                return {
                    kind: GridCellKind.Boolean,
                    data: person.isOpen,
                    allowOverlay: true,
                    displayData: person.isOpen
                }
            }

            case 4: {
                return {
                    kind: GridCellKind.Bubble,
                    data: person.hobby,
                    allowOverlay: true,
                    displayData: person.hobby
                }
            }

            case 5: {
                return {
                    kind: GridCellKind.Image,
                    data: person.avatar,
                    allowOverlay: true,
                    displayData: person.avatar
                }
            }

            case 6: {
                return {
                    kind: GridCellKind.Markdown,
                    data: person.notes,
                    allowOverlay: true,
                    displayData: person.Markdown
                }
            }

            default: {
                return {}
            }
        }
    }
    // const [data, setData] = useState()
    const [editorRect, setEditorRect] = useState({ width: 500, height: 300 })
    const { width, height } = editorRect

    useEffect(() => {
        const calcRect = () => {
            const outerContainerDom = ref.current.parentElement.parentElement
            if (outerContainerDom) {
                const { width, height } = outerContainerDom.getBoundingClientRect()
                setEditorRect({ width: width - 12, height: height - 12 })
            }
        }

        calcRect()

        window.addEventListener('resize', calcRect, false)

        return () => {
            window.removeEventListener('resize', calcRect, false)
        }
    }, [])

    return (
        <div ref={ref}>
            <DataEditor
                key={dsId}
                width={width}
                height={height}
                columns={columns}
                getCellContent={getData}
                rows={data.length}
                onCellEdited={(p, q) => console.log(p, q)}
            />
            <div id="portal" style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999 }} />
        </div>
    )
}
