import React from 'react'
import { Card } from '@/components/ui/card'

const ResumePage = () => {
  return (
    <div className='container max-w-3xl'>
      <section className='pb-24 pt-40'>
        <h2 className='mb-2 text-2xl font-semibold'>个人简历</h2>

        <Card className='mb-4 p-4'>
          <h3 className='text-xl font-semibold'>基本信息</h3>
          <ul className='list-inside list-disc'>
            <li>姓名: 王立涛</li>
            <li>性别: 男</li>
            <li>年龄: 30</li>
            <li>职业: 视频剪辑师</li>
            <li>联系方式: 17648288522 / wanglitao.gmyx@gmail.com</li>
          </ul>
        </Card>

        <Card className='mb-4 p-4'>
          <h3 className='text-xl font-semibold'>教育背景</h3>
          <ul className='list-inside list-disc'>
            <li>
              <h4 className='font-semibold'>XX 大学 - 影视制作专业</h4>
              <p>入学时间 - 毕业时间</p>
              <p>相关课程: 影视剪辑、影视特效、影视后期制作等</p>
            </li>
          </ul>
        </Card>

        <Card className='mb-4 p-4'>
          <h3 className='text-xl font-semibold'>工作经历</h3>
          <ul className='list-inside list-disc'>
            <li>
              <h4 className='font-semibold'>XX 公司 - 视频剪辑师</h4>
              <p>入职时间 - 离职时间</p>
              <p>
                工作描述:
                负责公司各类视频项目的剪辑与后期制作，包括广告视频、宣传视频等，熟练运用多种剪辑软件，与团队成员协作完成项目，满足客户需求。
              </p>
            </li>
          </ul>
        </Card>

        <Card className='mb-4 p-4'>
          <h3 className='text-xl font-semibold'>技能清单</h3>
          <ul className='list-inside list-disc'>
            <li>熟练掌握 Adobe Premiere Pro、Final Cut Pro 等视频剪辑软件</li>
            <li>熟悉 After Effects 等特效制作软件</li>
            <li>具备良好的视频色彩调整与音频处理能力</li>
          </ul>
        </Card>

        <Card className='mb-4 p-4'>
          <h3 className='text-xl font-semibold'>奖项与荣誉</h3>
          <ul className='list-inside list-disc'>
            <li>XX 视频剪辑大赛二等奖</li>
          </ul>
        </Card>
      </section>
    </div>
  )
}

export default ResumePage
