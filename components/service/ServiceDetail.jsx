import React from 'react';
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  XIcon,
} from '@heroicons/react/outline';
import TitleNoDash from '../shared/TitleNoDash';
import Link from 'next/link';
import {useState} from 'react';
import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';

const pages = [
  {name: 'Dịch vụ', href: '#', current: false},
  {name: 'Project Nero', href: '#', current: true},
];
const post = [
  {
    title: 'Introduction',
    link: [
      {
        title: 'How can you contact us about this policy?',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        href: '#',
      },
      {
        title: 'Where does it come from?',
        content:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        href: '#',
      },
    ],
  },
  {
    title: 'What information do we collect?',
    link: [
      {
        title: 'Why do we use it?',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        href: '#',
      },
      {
        title: 'Where can I get some?',
        content:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        href: '#',
      },
    ],
  },
  {
    title: 'What are your privacy rights?',
    link: [
      {
        title: 'The standard Lorem Ipsum passage, used since the 1500s',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        href: '#',
      },
      {
        title: '1914 translation by H. Rackham',
        content:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,',
        href: '#',
      },
      {
        title: '1914 translation by H. Rackham',
        content:
          'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. ',
        href: '#',
      },
    ],
  },
  {
    title: 'How do we use your information?',
    link: [
      {
        title: 'Curabitur ac dui a elit egestas vulputate quis vel nunc.',
        content:
          'Phasellus vestibulum imperdiet auctor. Duis quis lectus at tortor scelerisque pellentesque sit amet sed ante. Vivamus ut mollis augue, a cursus erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla porttitor lorem odio, in hendrerit ante maximus at. Donec et tempus libero. Fusce quis eleifend diam, at laoreet tortor. Sed urna odio, ornare non molestie et, ornare nec eros. Proin ut dapibus libero, ut feugiat odio. Ut sollicitudin felis vitae sapien imperdiet finibus a eu nulla. Nunc aliquam ipsum massa, vel dictum lectus mattis et. Suspendisse a ligula sollicitudin tortor porttitor fringilla.',
        href: '#',
      },
      {
        title: 'Lorem Ipsum là gì?',
        content:
          'Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.',
        href: '#',
      },
      {
        title: 'Nó đến từ đâu?',
        content:
          'Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của Lorem Ipsum, Lorem ipsum dolor sit amet... được trích từ một câu trong đoạn thứ 1.10.32Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn 1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng Anh được dịch bởi H. Rackham vào năm 1914.',
        href: '#',
      },
    ],
  },
  {
    title: 'Do we use cookies and other tracking technologies?',
    link: [
      {
        title: 'Tại sao lại sử dụng nó?',
        content:
          'Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).',
        href: '#',
      },
      {
        title: 'Làm thế nào để có nó?',
        content:
          'Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
    ],
  },
  {
    title: 'What information do we collect?',
    link: [
      {
        title: 'Why do we use it?',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        href: '#',
      },
      {
        title: 'Where can I get some?',
        content:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        href: '#',
      },
    ],
  },
  {
    title: 'How do we keep your information safe?',
    link: [
      {
        title: 'A pulvinar leo pretium tellus',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
    ],
  },
  {
    title: 'Cursus facilisis nisl',
    link: [
      {
        title: 'A pulvinar leo pretium tellus',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content: 'Content of A pulvinar leo pretium tellus',
        href: '#',
      },
    ],
  },
  {
    title: 'What information do we collect?',
    link: [
      {
        title: 'Why do we use it?',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        href: '#',
      },
      {
        title: 'Where can I get some?',
        content:
          'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        href: '#',
      },
    ],
  },
  {
    title: 'Do we use cookies and other tracking technologies?',
    link: [
      {
        title: 'Tại sao lại sử dụng nó?',
        content:
          'Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).',
        href: '#',
      },
      {
        title: 'Làm thế nào để có nó?',
        content:
          'Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
    ],
  },
  {
    title: 'Oh Yes Lets Do It?',
    link: [
      {
        title: 'Tại sao lại sử dụng nó?',
        content:
          'Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).',
        href: '#',
      },
      {
        title: 'Làm thế nào để có nó?',
        content:
          'Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
      {
        title: 'Sapien mauris, ultricies ornare nisi',
        content:
          'Content of A pulvinar leo pretium tellus Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.',
        href: '#',
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const ServiceDetail = () => {
  const [content, setContent] = useState(post[0]);
  const [item, setItem] = useState(post[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const updateItem = (item) => {
    setItem(item);
  };
  const updateData = (item) => {
    setContent(item);
  };

  return (
    <div className="container mx-auto pt-6 pb-16 md:pt-8 md:pb-24 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-2 inline-flex rounded-lg border border-gray-300 p-2 shadow-md hover:bg-gray-100 md:hidden"
          >
            {isSidebarOpen ? (
              <XIcon className="h-6 w-6 cursor-pointer text-gray-700 " />
            ) : (
              <DotsVerticalIcon className="h-6 w-6 cursor-pointer text-gray-700 " />
            )}
          </div>
          {/* Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li>
                <div>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-500 hover:text-gray-500"
                  >
                    Trang chủ
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className={classNames(
                        page.current ? 'text-red-700' : 'text-gray-500',
                        'font-inter text-sm font-medium text-gray-500 hover:text-gray-700',
                      )}
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <div className="grid gap-8  md:grid-cols-10  ">
          <div
            className={classNames(
              'pt-8 md:col-span-4 md:block md:pt-16',
              isSidebarOpen ? '' : 'hidden',
            )}
          >
            <TitleNoDash str1={'DỊCH VỤ'} str2="SUZU GROUP" />
            <div className="pb-4">
              <div className="relative mt-1 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Nhập từ khóa tìm kiếm ở đây"
                  className="block w-full rounded-lg  border border-gray-300 pr-12 shadow-sm placeholder:text-base placeholder:text-gray-500 focus:border-red-500 focus:ring-red-500"
                />
                <Link href="/">
                  <div className="absolute inset-y-0 right-0 flex cursor-pointer">
                    <kbd className="inline-flex items-center rounded  px-2 font-sans text-sm font-medium text-gray-400">
                      <img src="/Icon/search.svg" className="h-6 w-6"></img>
                    </kbd>
                  </div>
                </Link>
              </div>
            </div>
            {/* List */}
            <nav className=" scrollbar-hide sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
              <ol>
                {post.map((item, index) => (
                  <li
                    className="mb-4 text-xl font-semibold text-gray-900 md:mb-8 md:text-2xl"
                    key={index}
                  >
                    {item.title}
                    <ol className="mt-4">
                      {item.link.map((link, index) => (
                        <Link href={link.href} key={index}>
                          <div
                            onClick={() => updateItem(item)}
                            className="group cursor-pointer border-red-500 hover:border-l"
                          >
                            <li
                              className="group-hover: py-2 pl-4 text-sm font-semibold text-gray-900 hover:text-red-500 md:text-base"
                              key={link.title}
                              onClick={() => {
                                updateData(link);
                                setIsSidebarOpen(false);
                              }}
                            >
                              {link.title}
                            </li>
                          </div>
                        </Link>
                      ))}
                    </ol>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div
            className={`md:col-span-6${isSidebarOpen ? ' hidden' : ' block'} `}
          >
            {/* Detail content */}
            <article className="prose lg:prose-xl prose-lg prose-indigo mx-auto pb-8 text-xl leading-8 text-gray-500 md:col-span-6">
              <div>{/* Paste Markdown here */}</div>
              <p className="text-5xl font-semibold text-gray-700">
                {item.title}
              </p>

              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {content?.title}
                </p>
                <p className="text-base text-gray-500">{content?.content}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
