import Image from 'next/image'

export default function Home() {
  const profileData = {
    name: '홍정현',
    studentId: '92313726',
    major: '정보보호학과',
    image: '/img3.jpg',
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-[900px] p-12">
        <div className="flex items-center">
          <Image
            src={profileData.image}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mr-12"
          />
          <div className="flex-1">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="font-bold text-right pr-4 py-2">이름:</td>
                  <td className="py-2">{profileData.name}</td>
                </tr>
                <tr>
                  <td className="font-bold text-right pr-4 py-2">학번:</td>
                  <td className="py-2">{profileData.studentId}</td>
                </tr>
                <tr>
                  <td className="font-bold text-right pr-4 py-2">전공:</td>
                  <td className="py-2">{profileData.major}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
