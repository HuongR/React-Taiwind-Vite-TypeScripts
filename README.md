# 🚀 Dự án API sử dụng ASP.NET Core và Mô hình DDD

## 🧠 Domain-Driven Design (DDD) là gì?

Domain-Driven Design (DDD) là một phương pháp thiết kế phần mềm tập trung vào **logic nghiệp vụ cốt lõi (domain)** của hệ thống. Mô hình này giúp tổ chức code theo cách rõ ràng, linh hoạt, dễ bảo trì và phản ánh đúng thực tế nghiệp vụ.

### 🔑 Các thành phần chính của DDD

| Thư mục              | Vai trò |
|----------------------|--------|
| `Domain`             | Chứa các **entitiy**, **value object**, **interface repository**, và logic nghiệp vụ thuần túy. |
| `Application`        | Chứa các **service application**, **DTOs**, **command/query handlers**. Không chứa logic nghiệp vụ. |
| `Infrastructure`     | Chứa các thành phần kỹ thuật như **EF Core**, **database access**, **service thực tế**,... |
| `Persistence`        | Thực thi các repository (dựa vào interface ở Domain). |
| `API` (hoặc `WebAPI`) | Lớp ngoài cùng, xử lý request/response, validation, mapping,... |

---

## 🛠️ Công nghệ sử dụng

- ✅ **ASP.NET Core Web API** – khung xây dựng RESTful API hiệu năng cao
- ✅ **Entity Framework Core** – ORM để tương tác với cơ sở dữ liệu
- ✅ **AutoMapper** – ánh xạ giữa các lớp (DTO ↔ Entity)
- ✅ **FluentValidation** – kiểm tra dữ liệu đầu vào
- ✅ **MediatR** – xử lý CQRS (Command/Query) theo cách tách biệt
- ✅ **Swagger / Swashbuckle** – tài liệu hóa API tự động

---

## 🗂️ Cấu trúc dự án
├── backend/
│ ├── backend.API/ # ASP.NET Core API (lớp giao tiếp)
│ ├── backend.Application/ # Lớp trung gian: Service, DTO, CQRS,...
│ ├── backend.Domain/ # Định nghĩa nghiệp vụ: Entity, Interface, Enum,...
│ ├── backend.Infrastructure/ # Các cấu hình kỹ thuật, DI, external services
│ ├── backend.Persistence/ # Cấu hình DB context, triển khai Repository
│ ├── backend.Tests/ # Unit Tests / Integration Tests
│ └── backend.sln # File solution chính


---

## ⚙️ Cài đặt và chạy dự án

```bash
# 1. Clone repo
git clone https://github.com/ten-cua-ban/ten-repo.git

# 2. Mở file solution (.sln) bằng Visual Studio hoặc VS Code

# 3. Restore NuGet packages
dotnet restore

# 4. Chạy dự án API
cd backend.API
dotnet run
