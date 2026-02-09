import { NavItem, AppData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Về AIBIZ', href: '#hero' },
  { label: 'Vấn đề & Giải pháp', href: '#pain-points' },
  { label: 'Các gói đào tạo', href: '#packages' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Bảng giá', href: '#pricing' },
];

export const INITIAL_DATA: AppData = {
  hero: {
    title: "Đột Phá Năng Suất Doanh Nghiệp Với AI Thực Chiến",
    highlight: "Năng Suất",
    subtitle: "Chương trình đào tạo AI chuyên biệt cho doanh nghiệp tại Phú Mỹ - Bà Rịa Vũng Tàu. Làm chủ công nghệ - Tối ưu quy trình - Tăng trưởng doanh thu ngay hôm nay.",
    badge: "Đào tạo AI Chuyên nghiệp tại Phú Mỹ"
  },
  problems: [
    "Tốn quá nhiều thời gian cho các công việc hành chính, soạn thảo báo cáo, email lặp đi lặp lại.",
    "Lúng túng trước làn sóng AI vì không biết bắt đầu từ đâu, sợ bị tụt hậu.",
    "Lo ngại nhân sự sử dụng AI tự phát không an toàn, nguy cơ lộ bí mật kinh doanh."
  ],
  solutions: [
    "Không lý thuyết suông, tập trung 100% vào ứng dụng thực tế công việc.",
    "Giải quyết bài toán cụ thể của doanh nghiệp ngay tại lớp học (Case study thực tế).",
    "Hướng dẫn kiểm soát đầu ra và quy trình bảo mật dữ liệu an toàn tuyệt đối."
  ],
  contact: {
    address: "Khu vực Phú Mỹ, Bà Rịa – Vũng Tàu",
    phone: "0909 123 456",
    email: "contact@aibiz.vn",
    companyName: "Cao đẳng Quốc tế VABIS"
  },
  packages: [
    {
      id: "pkg_1",
      title: "Gói Căn Bản",
      duration: "04 Buổi",
      description: "Trang bị tư duy AI đúng đắn, thành thạo công cụ văn phòng.",
      features: [
        "Tư duy AI thực chiến",
        "Soạn thảo văn bản & Email tự động",
        "Quản lý công việc thông minh",
        "Tối ưu hóa Excel/Google Sheets"
      ],
      recommendedFor: "Nhân viên văn phòng, Admin",
      iconName: 'Monitor'
    },
    {
      id: "pkg_2",
      title: "Gói Nâng Cao",
      duration: "08 Buổi",
      description: "Đi sâu vào tự động hóa và xử lý dữ liệu phức tạp.",
      features: [
        "Xây dựng quy trình tự động (Automation)",
        "Phân tích dữ liệu kinh doanh",
        "Tạo báo cáo tự động",
        "Xây dựng trợ lý ảo riêng biệt"
      ],
      recommendedFor: "Trưởng nhóm, Chuyên viên phân tích",
      iconName: 'Cpu'
    },
    {
      id: "pkg_3",
      title: "Gói Executive",
      duration: "01 Buổi",
      description: "Dành riêng cho Lãnh đạo. Tư duy chiến lược trong kỷ nguyên AI.",
      features: [
        "Chiến lược ứng dụng AI toàn diện",
        "Ra quyết định dựa trên dữ liệu",
        "Quản trị nhân sự thời đại AI",
        "Bảo mật và đạo đức AI"
      ],
      recommendedFor: "CEO, Giám đốc, Chủ doanh nghiệp",
      iconName: 'Briefcase'
    },
    {
      id: "pkg_4",
      title: "Gói Train-the-Trainer",
      duration: "06 Buổi",
      description: "Đào tạo đội ngũ nòng cốt để tự duy trì và đào tạo lại.",
      features: [
        "Kỹ năng sư phạm & Coaching AI",
        "Xây dựng giáo trình nội bộ",
        "Đánh giá năng lực nhân sự",
        "Chuyển giao công nghệ lõi"
      ],
      recommendedFor: "Bộ phận L&D, HR Manager",
      iconName: 'Users'
    }
  ],
  process: [
    {
      step: 1,
      title: "Khảo sát",
      description: "Phân tích nhu cầu và thực trạng tại doanh nghiệp để thiết kế lộ trình phù hợp."
    },
    {
      step: 2,
      title: "Thiết kế",
      description: "Xây dựng bộ Prompt mẫu và bài tập thực hành riêng cho ngành nghề của bạn."
    },
    {
      step: 3,
      title: "Đào tạo",
      description: "Triển khai tại doanh nghiệp hoặc tại trường VABIS theo phương pháp: Giảng - Mẫu - Thực hành."
    },
    {
      step: 4,
      title: "Nghiệm thu",
      description: "Đánh giá mức độ hài lòng, kết quả đầu ra và khả năng áp dụng thực tế của nhân sự."
    },
    {
      step: 5,
      title: "Đồng hành",
      description: "Gói AI Coaching hỗ trợ sau đào tạo để đảm bảo hiệu quả lâu dài và cập nhật công nghệ mới."
    }
  ],
  pricing: [
    { quantity: "02 Gói", discount: 5, label: "Khởi động" },
    { quantity: "03 Gói", discount: 8, label: "Tăng tốc" },
    { quantity: "04+ Gói", discount: 10, label: "Toàn diện" },
  ],
  smtp: {
    host: "smtp.gmail.com",
    port: "587",
    user: "demo@aibiz.vn",
    pass: "",
    secure: true,
    receiverEmail: "admin@aibiz.vn"
  }
};