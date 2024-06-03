import type { FC } from "react"

type AnnouncementType = {
  title: String
}

export const Announcement: FC<AnnouncementType> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-y-4">
      <div className="text-lg font-bold">{title}</div>
      <div className="border border-sky-400 rounded p-4 bg-sky-200 text-sm">
        <div className="text-center mb-4">
          هدف این تمرین، پیاده‌سازی سبد کالا می‌باشد
        </div>
        <div>
          به قسمت <strong>محصولات</strong> و یا <strong>سبد خرید </strong>مراجعه
          نمایید و با انتخاب و یا حذف محصولات به چگونگی کارکرد آن توجه نمایید.
        </div>
      </div>
    </div>
  )
}
