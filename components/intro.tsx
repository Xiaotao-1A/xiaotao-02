import Image from 'next/image'
import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hello, 我是王立涛.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          我是一名{' '}
          <span
            style={{
              fontWeight: 'bold' /* 加粗 */,
              background:
                'linear-gradient(90deg, #ff7e5f, #feb47b)' /* 渐变颜色 */,
              WebkitBackgroundClip: 'text' /* 剪裁背景 */,
              WebkitTextFillColor: 'transparent' /* 透明填充颜色 */
            }}
          >
            视频剪辑
          </span>
          ，曾在高途集团、交个朋友、巨鼎科技负责抖音账号的{' '}
          <span
            style={{
              fontWeight: 'bold' /* 加粗 */,
              background:
                'linear-gradient(90deg, #5f74ff, #7ba2fe)' /* 渐变颜色 */,
              WebkitBackgroundClip: 'text' /* 剪裁背景 */,
              WebkitTextFillColor: 'transparent' /* 透明填充颜色 */
            }}
          >
            剪辑拍摄
          </span>{' '}
          工作，3年工作经验，也曾参与过品牌账号的视频剪辑和拍摄，中长视频（科普、采访、课程类）的后期制作，多个视频达到100w+播放量。
          <br />
          你可以通过微信/电话：17648288522，
          <br />
          或者邮箱：
          <a href='mailto:wanglitao.gmyx@gmail.com'>
            wanglitao.gmyx@gmail.com
          </a>{' '}
          联系我。
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
