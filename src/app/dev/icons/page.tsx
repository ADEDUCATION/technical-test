import IconAlertCircle from '@ad-education/ui/dist/icons/IconAlertCircle'
import IconAlertTriangle from '@ad-education/ui/dist/icons/IconAlertTriangle'
import IconArrowDown from '@ad-education/ui/dist/icons/IconArrowDown'
import IconArrowLeft from '@ad-education/ui/dist/icons/IconArrowLeft'
import IconArrowRight from '@ad-education/ui/dist/icons/IconArrowRight'
import IconArrowUp from '@ad-education/ui/dist/icons/IconArrowUp'
import IconArrowsSort from '@ad-education/ui/dist/icons/IconArrowsSort'
import IconBackpack from '@ad-education/ui/dist/icons/IconBackpack'
import IconBell from '@ad-education/ui/dist/icons/IconBell'
import IconBold from '@ad-education/ui/dist/icons/IconBold'
import IconBooks from '@ad-education/ui/dist/icons/IconBooks'
import IconBrandLine from '@ad-education/ui/dist/icons/IconBrandLine'
import IconBuildingBank from '@ad-education/ui/dist/icons/IconBuildingBank'
import IconBuildingCircus from '@ad-education/ui/dist/icons/IconBuildingCircus'
import IconBuildingStore from '@ad-education/ui/dist/icons/IconBuildingStore'
import IconCalendarEvent from '@ad-education/ui/dist/icons/IconCalendarEvent'
import IconCategory from '@ad-education/ui/dist/icons/IconCategory'
import IconCheck from '@ad-education/ui/dist/icons/IconCheck'
import IconChefHat from '@ad-education/ui/dist/icons/IconChefHat'
import IconChevronDown from '@ad-education/ui/dist/icons/IconChevronDown'
import IconChevronLeft from '@ad-education/ui/dist/icons/IconChevronLeft'
import IconChevronRight from '@ad-education/ui/dist/icons/IconChevronRight'
import IconChevronUp from '@ad-education/ui/dist/icons/IconChevronUp'
import IconCircle from '@ad-education/ui/dist/icons/IconCircle'
import IconCircleCheck from '@ad-education/ui/dist/icons/IconCircleCheck'
import IconCircleCheckFilled from '@ad-education/ui/dist/icons/IconCircleCheckFilled'
import IconCirclePlus from '@ad-education/ui/dist/icons/IconCirclePlus'
import IconCircleX from '@ad-education/ui/dist/icons/IconCircleX'
import IconClipboard from '@ad-education/ui/dist/icons/IconClipboard'
import IconClock from '@ad-education/ui/dist/icons/IconClock'
import IconCloudDown from '@ad-education/ui/dist/icons/IconCloudDown'
import IconCompass from '@ad-education/ui/dist/icons/IconCompass'
import IconDeviceFloppy from '@ad-education/ui/dist/icons/IconDeviceFloppy'
import IconDeviceTabletCheck from '@ad-education/ui/dist/icons/IconDeviceTabletCheck'
import IconDoor from '@ad-education/ui/dist/icons/IconDoor'
import IconDots from '@ad-education/ui/dist/icons/IconDots'
import IconDownload from '@ad-education/ui/dist/icons/IconDownload'
import IconExternalLink from '@ad-education/ui/dist/icons/IconExternalLink'
import IconEye from '@ad-education/ui/dist/icons/IconEye'
import IconFileCertificate from '@ad-education/ui/dist/icons/IconFileCertificate'
import IconFolder from '@ad-education/ui/dist/icons/IconFolder'
import IconGripVertical from '@ad-education/ui/dist/icons/IconGripVertical'
import IconHash from '@ad-education/ui/dist/icons/IconHash'
import IconHistoryToggle from '@ad-education/ui/dist/icons/IconHistoryToggle'
import IconHome from '@ad-education/ui/dist/icons/IconHome'
import IconHourglassEmpty from '@ad-education/ui/dist/icons/IconHourglassEmpty'
import IconInfoCircle from '@ad-education/ui/dist/icons/IconInfoCircle'
import IconInfoSquareRounded from '@ad-education/ui/dist/icons/IconInfoSquareRounded'
import IconItalic from '@ad-education/ui/dist/icons/IconItalic'
import IconLayoutList from '@ad-education/ui/dist/icons/IconLayoutList'
import IconLayoutSidebar from '@ad-education/ui/dist/icons/IconLayoutSidebar'
import IconLink from '@ad-education/ui/dist/icons/IconLink'
import IconLogout from '@ad-education/ui/dist/icons/IconLogout'
import IconMenu2 from '@ad-education/ui/dist/icons/IconMenu2'
import IconMoon from '@ad-education/ui/dist/icons/IconMoon'
import IconPlus from '@ad-education/ui/dist/icons/IconPlus'
import IconPointFilled from '@ad-education/ui/dist/icons/IconPointFilled'
import IconRefresh from '@ad-education/ui/dist/icons/IconRefresh'
import IconRosetteNumber2 from '@ad-education/ui/dist/icons/IconRosetteNumber2'
import IconSchool from '@ad-education/ui/dist/icons/IconSchool'
import IconSearch from '@ad-education/ui/dist/icons/IconSearch'
import IconSelector from '@ad-education/ui/dist/icons/IconSelector'
import IconSettings from '@ad-education/ui/dist/icons/IconSettings'
import IconSparkles from '@ad-education/ui/dist/icons/IconSparkles'
import IconSpeakerphone from '@ad-education/ui/dist/icons/IconSpeakerphone'
import IconSquare from '@ad-education/ui/dist/icons/IconSquare'
import IconSquareCheckFilled from '@ad-education/ui/dist/icons/IconSquareCheckFilled'
import IconSun from '@ad-education/ui/dist/icons/IconSun'
import IconTicket from '@ad-education/ui/dist/icons/IconTicket'
import IconToggleLeft from '@ad-education/ui/dist/icons/IconToggleLeft'
import IconTrash from '@ad-education/ui/dist/icons/IconTrash'
import IconUnderline from '@ad-education/ui/dist/icons/IconUnderline'
import IconUser from '@ad-education/ui/dist/icons/IconUser'
import IconUsers from '@ad-education/ui/dist/icons/IconUsers'
import IconUsersGroup from '@ad-education/ui/dist/icons/IconUsersGroup'
import IconVideo from '@ad-education/ui/dist/icons/IconVideo'
import IconWifi from '@ad-education/ui/dist/icons/IconWifi'
import IconWifiOff from '@ad-education/ui/dist/icons/IconWifiOff'
import IconWindow from '@ad-education/ui/dist/icons/IconWindow'
import IconX from '@ad-education/ui/dist/icons/IconX'
import { notFound } from 'next/navigation'

interface IconItem {
    name: string
    component: React.ComponentType<{ className?: string }>
}

const icons: IconItem[] = [
    { name: 'IconAlertCircle', component: IconAlertCircle },
    { name: 'IconAlertTriangle', component: IconAlertTriangle },
    { name: 'IconArrowDown', component: IconArrowDown },
    { name: 'IconArrowLeft', component: IconArrowLeft },
    { name: 'IconArrowRight', component: IconArrowRight },
    { name: 'IconArrowUp', component: IconArrowUp },
    { name: 'IconArrowsSort', component: IconArrowsSort },
    { name: 'IconBackpack', component: IconBackpack },
    { name: 'IconBell', component: IconBell },
    { name: 'IconBold', component: IconBold },
    { name: 'IconBooks', component: IconBooks },
    { name: 'IconBrandLine', component: IconBrandLine },
    { name: 'IconBuildingBank', component: IconBuildingBank },
    { name: 'IconBuildingCircus', component: IconBuildingCircus },
    { name: 'IconBuildingStore', component: IconBuildingStore },
    { name: 'IconCalendarEvent', component: IconCalendarEvent },
    { name: 'IconCategory', component: IconCategory },
    { name: 'IconCheck', component: IconCheck },
    { name: 'IconChefHat', component: IconChefHat },
    { name: 'IconChevronDown', component: IconChevronDown },
    { name: 'IconChevronLeft', component: IconChevronLeft },
    { name: 'IconChevronRight', component: IconChevronRight },
    { name: 'IconChevronUp', component: IconChevronUp },
    { name: 'IconCircle', component: IconCircle },
    { name: 'IconCircleCheck', component: IconCircleCheck },
    { name: 'IconCircleCheckFilled', component: IconCircleCheckFilled },
    { name: 'IconCirclePlus', component: IconCirclePlus },
    { name: 'IconCircleX', component: IconCircleX },
    { name: 'IconClipboard', component: IconClipboard },
    { name: 'IconClock', component: IconClock },
    { name: 'IconCloudDown', component: IconCloudDown },
    { name: 'IconCompass', component: IconCompass },
    { name: 'IconDeviceFloppy', component: IconDeviceFloppy },
    { name: 'IconDeviceTabletCheck', component: IconDeviceTabletCheck },
    { name: 'IconDoor', component: IconDoor },
    { name: 'IconDots', component: IconDots },
    { name: 'IconDownload', component: IconDownload },
    { name: 'IconExternalLink', component: IconExternalLink },
    { name: 'IconEye', component: IconEye },
    { name: 'IconFileCertificate', component: IconFileCertificate },
    { name: 'IconFolder', component: IconFolder },
    { name: 'IconGripVertical', component: IconGripVertical },
    { name: 'IconHash', component: IconHash },
    { name: 'IconHistoryToggle', component: IconHistoryToggle },
    { name: 'IconHome', component: IconHome },
    { name: 'IconHourglassEmpty', component: IconHourglassEmpty },
    { name: 'IconInfoCircle', component: IconInfoCircle },
    { name: 'IconInfoSquareRounded', component: IconInfoSquareRounded },
    { name: 'IconItalic', component: IconItalic },
    { name: 'IconLayoutList', component: IconLayoutList },
    { name: 'IconLayoutSidebar', component: IconLayoutSidebar },
    { name: 'IconLink', component: IconLink },
    { name: 'IconLogout', component: IconLogout },
    { name: 'IconMenu2', component: IconMenu2 },
    { name: 'IconMoon', component: IconMoon },
    { name: 'IconPlus', component: IconPlus },
    { name: 'IconPointFilled', component: IconPointFilled },
    { name: 'IconRefresh', component: IconRefresh },
    { name: 'IconRosetteNumber2', component: IconRosetteNumber2 },
    { name: 'IconSchool', component: IconSchool },
    { name: 'IconSearch', component: IconSearch },
    { name: 'IconSelector', component: IconSelector },
    { name: 'IconSettings', component: IconSettings },
    { name: 'IconSparkles', component: IconSparkles },
    { name: 'IconSpeakerphone', component: IconSpeakerphone },
    { name: 'IconSquare', component: IconSquare },
    { name: 'IconSquareCheckFilled', component: IconSquareCheckFilled },
    { name: 'IconSun', component: IconSun },
    { name: 'IconTicket', component: IconTicket },
    { name: 'IconToggleLeft', component: IconToggleLeft },
    { name: 'IconTrash', component: IconTrash },
    { name: 'IconUnderline', component: IconUnderline },
    { name: 'IconUser', component: IconUser },
    { name: 'IconUsers', component: IconUsers },
    { name: 'IconUsersGroup', component: IconUsersGroup },
    { name: 'IconVideo', component: IconVideo },
    { name: 'IconWifi', component: IconWifi },
    { name: 'IconWifiOff', component: IconWifiOff },
    { name: 'IconWindow', component: IconWindow },
    { name: 'IconX', component: IconX },
]

export default function IconsPage() {
    if (process.env.NODE_ENV === 'production') {
        notFound()
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                    <h1 className="mb-2 text-4xl font-bold text-slate-900">Icon Gallery</h1>
                    <p className="text-lg text-slate-600">
                        All available icons from @ad-education/ui
                    </p>
                    <p className="mt-2 text-sm text-slate-500">Total Icons: {icons.length}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {icons.map((icon) => {
                        const IconComponent = icon.component
                        return (
                            <div
                                key={icon.name}
                                className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg"
                            >
                                <div className="mb-3 flex h-12 w-12 items-center justify-center">
                                    <IconComponent className="h-8 w-8 text-slate-700" />
                                </div>
                                <p className="text-center text-xs font-medium wrap-break-word text-slate-600">
                                    {icon.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
