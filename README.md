# Thiệp mời lễ tốt nghiệp

Website thiệp mời tốt nghiệp được xây dựng bằng Next.js và sẵn sàng triển khai
công khai trên Vercel. Website không có đăng nhập, tài khoản, cơ sở dữ liệu hay
API riêng.

## Chạy trên máy

Yêu cầu Node.js 22.

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Cá nhân hóa tên khách mời

Thêm tên khách mời vào cuối đường dẫn:

```text
http://localhost:3000/Quốc%20Hoài
```

Khi triển khai, thay phần tên miền bằng tên miền Vercel của bạn. Trình duyệt sẽ
tự mã hóa dấu cách và ký tự tiếng Việt khi bạn nhập hoặc chia sẻ đường dẫn.

## Triển khai lên Vercel

### Qua GitHub

1. Đẩy toàn bộ thư mục này lên một repository GitHub.
2. Trong Vercel, chọn **Add New → Project** và import repository đó.
3. Vercel sẽ nhận diện **Next.js**. Không cần sửa Build Command hay Output Directory.
4. Chọn **Deploy**.

### Qua Vercel CLI

```bash
npx vercel
npx vercel --prod
```

Website không cần biến môi trường. Nếu Vercel Project của bạn đang bật
Deployment Protection, hãy tắt mục đó trong **Settings → Deployment Protection**
để mọi khách mời đều mở được đường dẫn.

## Ảnh xem trước khi chia sẻ

Website tự tạo Open Graph preview tỷ lệ `1200 × 630` cho Zalo, Facebook và các
ứng dụng hỗ trợ link preview. Tên trên ảnh preview thay đổi theo tên khách mời
trong URL. Preview chỉ hoạt động sau khi website được deploy lên một URL công
khai; các ứng dụng mạng xã hội không thể truy cập `localhost`.

## Nội dung cần chỉnh sửa

- Nội dung thiệp: `app/[[...guest]]/page.tsx`
- Giao diện và màu sắc: `app/globals.css`
- Tiêu đề và mô tả khi chia sẻ: `app/layout.tsx`
