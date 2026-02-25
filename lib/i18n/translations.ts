export type Locale = "vi" | "en"

export const translations = {
  vi: {
    nav: {
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      contact: "Liên hệ",
    },
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Nguyễn Hữu Phước.",
      tagline: "Tôi xây dựng sản phẩm số.",
      description:
        "Tôi là một <highlight>Kĩ sư phần mềm</highlight> chuyên về phát triển ứng dụng web. Hiện tại, tôi tập trung xây dựng những sản phẩm có trải nghiệm người dùng tuyệt vời và hiệu suất cao.",
      cta: "Khám phá thêm",
    },
    about: {
      sectionNumber: "01.",
      title: "Giới thiệu",
      p1: "Xin chào! Tôi là một lập trình viên đam mê với việc xây dựng những sản phẩm kỹ thuật số. Hành trình của tôi bắt đầu từ việc tự học lập trình và phát triển web, rồi dần dần trở thành một kỹ sư phần mềm chuyên nghiệp.",
      p2_before: "Hiện tại, tôi đang tập trung vào việc xây dựng các ứng dụng web hiện đại với ",
      p2_highlight1: "hiệu suất cao",
      p2_mid1: ", ",
      p2_highlight2: "khả năng mở rộng tốt",
      p2_mid2: " và ",
      p2_highlight3: "trải nghiệm người dùng tuyệt vời",
      p2_after: ". Tôi luôn học hỏi và cập nhật công nghệ mới nhất.",
      p3: "Một số công nghệ tôi sử dụng thường xuyên:",
      photoPlaceholder: "https://res.cloudinary.com/dnjakwi6l/image/upload/v1761733495/shopquanao/w3fwvqj3fttzhqzxgwfo.jpg",
    },
    experience: {
      sectionNumber: "02.",
      title: "Kinh nghiệm",
      items: [
        {
          period: "07/2025 — 02/2026",
          role: "Software Engineer",
          company: "ABC Company",
          description:
            "Xây dựng và phát triển các tính năng mới cho sản phẩm chính của công ty. Làm việc với đội ngũ đa chức năng để tối ưu hiệu suất và trải nghiệm người dùng. Áp dụng các phương pháp phát triển phần mềm hiện đại như CI/CD, code review và automated testing.",
        },
        {
          period: "02/2025 - 06/2025",
          role: "Software Engineer",
          company: "Thebestservice Startup",
          description:
            "Tham gia thiết kế và phát triển ứng dụng web cho công ty, đảm bảo hiệu suất và khả năng mở rộng của hệ thống. Học hỏi và áp dụng các công nghệ mới trong môi trường làm việc thực tế.",
        },
        {
          period: "09/2024 - 12/2024",
          role: "Internship Developer",
          company: "Hoa Son Technology Company",
          description:
            "Được tham gia phát triển ứng dụng web theo yêu cầu của khách hàng. Học hỏi và áp dụng các công nghệ mới trong môi trường làm việc thực tế. Tham gia vào quá trình phát triển sản phẩm từ giai đoạn ý tưởng đến triển khai.",
        },
      ],
    },
    projects: {
      sectionNumber: "03.",
      title: "Dự án nổi bật",
      featuredLabel: "Dự án nổi bật",
      otherTitle: "Các dự án khác",
      featured: [
        {
          title: "E-Commerce Platform",
          description:
            "Nền tảng thương mại điện tử được thiết kế theo cấu trúc Microservice với đầy đủ tính năng với giỏ hàng, thanh toán, quản lý đơn hàng và dashboard admin. Hỗ trợ nhiều phương thức thanh toán và tích hợp vận chuyển. Tích hợp trò chuyện với AI để hỗ trợ khách hàng và cá nhân hóa trải nghiệm mua sắm.",
        },
        {
          title: "Clone Facebook",
          description:
            "Ứng dụng mạng xã hội với đẩy đủ tính năng như đăng bài, bình luận, like, follow, thông báo thời gian thực và giao diện người dùng thân thiện. Sử dụng WebSocket để cập nhật nội dung động và tối ưu hóa hiệu suất với caching và lazy loading.",
        },
        {
          title: "Tech Student",
          description:
            "Web bán khóa học trực tuyến với hệ thống quản lý khóa học, thanh toán và dashboard cho giảng viên. Hỗ trợ nhiều phương thức thanh toán và tích hợp công cụ phân tích để theo dõi hiệu suất khóa học và hành vi người dùng.",
        },
      ],
      other: [
        {
          title: "Portfolio Website",
          description: "Website portfolio cá nhân với thiết kế tối giản và hiện đại.",
        },
        {
          title: "Film Hub",
          description: "Web bán vé xem phim với hệ thống quản lý rạp chiếu, đặt vé và đánh giá phim.",
        },
        {
          title: "Map map",
          description: "Web theo dõi bạn bè bằng định vị thời gian thực với bản đồ tương tác và tính năng trò chuyện.",
        },
      ],
    },
    contact: {
      sectionNumber: "04.",
      preTitle: "Liên hệ",
      title: "Liên hệ với tôi",
      description:
        "Tôi luôn sẵn sàng lắng nghe những cơ hội mới và thú vị. Dù bạn có câu hỏi hay chỉ đơn giản muốn chào hỏi, tôi sẽ cố gắng phản hồi sớm nhất có thể!",
      cta: "Gửi email cho tôi",
    },
    footer: {
      credit: "Thiết kế & Phát triển bởi Nguyễn Hữu Phước",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I am",
      name: "Nguyen Huu Phuoc.",
      tagline: "I build digital products.",
      description:
        "I'm a <highlight>Software Engineer</highlight> specializing in web application development. Currently, I focus on building products with excellent user experience and high performance.",
      cta: "Explore more",
    },
    about: {
      sectionNumber: "01.",
      title: "About Me",
      p1: "Hello! I'm a developer passionate about building digital products. My journey started with self-learning programming and web development, gradually becoming a professional software engineer.",
      p2_before: "Currently, I focus on building modern web applications with ",
      p2_highlight1: "high performance",
      p2_mid1: ", ",
      p2_highlight2: "great scalability",
      p2_mid2: " and ",
      p2_highlight3: "excellent user experience",
      p2_after: ". I'm always learning and keeping up with the latest technologies.",
      p3: "Some technologies I use regularly:",
      photoPlaceholder: "https://res.cloudinary.com/dnjakwi6l/image/upload/v1761733495/shopquanao/w3fwvqj3fttzhqzxgwfo.jpg",
    },
    experience: {
      sectionNumber: "02.",
      title: "Experience",
      items: [
        {
          period: "07/2025 — 02/2026",
          role: "Software Engineer",
          company: "ABC Company",
          description:
            "Building and developing new features for the company's main product. Working with cross-functional teams to optimize performance and user experience. Applying modern software development practices such as CI/CD, code review, and automated testing.",
        },
        {
          period: "02/2025 - 06/2025",
          role: "Software Engineer",
          company: "Thebestservice Startup",
          description:
            "Participated in designing and developing web applications for the company, ensuring system performance and scalability. Learned and applied new technologies in a real-world working environment.",
        },
        {
          period: "09/2024 - 12/2024",
          role: "Internship Developer",
          company: "Hoa Son Technology Company",
          description:
            "Participated in developing web applications according to customer requirements. Learned and applied new technologies in a real-world working environment. Involved in the product development process from ideation to deployment.",
        },
      ],
    },
    projects: {
      sectionNumber: "03.",
      title: "Featured Projects",
      featuredLabel: "Featured Project",
      otherTitle: "Other Projects",
      featured: [
        {
          title: "E-Commerce Platform",
          description:
            "An e-commerce platform designed with Microservices architecture featuring full capabilities: shopping cart, payment, order management, and admin dashboard. Supports multiple payment methods and shipping integration. Integrated AI chat to support customers and personalize the shopping experience.",
        },
        {
          title: "Clone Facebook",
          description:
            "A social networking application with full features such as posting, commenting, liking, following, real-time notifications, and a friendly user interface. Uses WebSockets for dynamic content updates and optimizes performance with caching and lazy loading.",
        },
        {
          title: "Tech Student",
          description:
            "An online course selling website with a course management system, payment, and instructor dashboard. Supports multiple payment methods and integrates analytical tools to track course performance and user behavior.",
        },
      ],
      other: [
        {
          title: "Portfolio Website",
          description: "A personal portfolio website with a minimalist and modern design.",
        },
        {
          title: "Film Hub",
          description: "A movie ticket booking website with a cinema management system, booking, and movie reviews.",
        },
        {
          title: "Map map",
          description: "A friend-tracking web app using real-time location with an interactive map and chat features.",
        },
      ],
    },
    contact: {
      sectionNumber: "04.",
      preTitle: "Contact",
      title: "Get In Touch",
      description:
        "I'm always open to new and exciting opportunities. Whether you have a question or just want to say hello, I'll try my best to get back to you!",
      cta: "Send me an email",
    },
    footer: {
      credit: "Designed & Built by Nguyen Huu Phuoc",
    },
  },
} as const

export type Translations = typeof translations.vi