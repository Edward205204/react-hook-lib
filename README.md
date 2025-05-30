# 🧩 my-react-hook-lib

Một thư viện React hooks nhẹ, được viết bằng TypeScript, tập hợp các hooks hữu ích từ các dự án thực tế.

## 📦 Cài đặt

```bash
npm install my-react-hook-lib
```

## 🚀 Các Hooks

### useLocalStorage

Hook để lưu trữ và đồng bộ dữ liệu với localStorage.

```tsx
import { useLocalStorage } from "my-react-hook-lib";

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}
```

### useDebounce

Hook để trì hoãn việc cập nhật giá trị, hữu ích cho search inputs.

```tsx
import { useDebounce } from "my-react-hook-lib";

function SearchInput() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    // Gọi API search với debouncedValue
  }, [debouncedValue]);

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

### useMediaQuery

Hook để theo dõi media queries, hữu ích cho responsive design.

```tsx
import { useMediaQuery } from "my-react-hook-lib";

function ResponsiveComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
      {isDarkMode && <DarkModeStyles />}
    </div>
  );
}
```

### usePagination

Hook để xử lý phân trang.

```tsx
import { usePagination } from "my-react-hook-lib";

function PaginatedList() {
  const { currentPage, totalPages, goToPage, nextPage, prevPage } =
    usePagination({
      totalItems: 100,
      itemsPerPage: 10,
    });

  return (
    <div>
      <button onClick={prevPage}>Previous</button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
```

### useQueryParams

Hook để xử lý query parameters trong URL.

```tsx
import { useQueryParams } from "my-react-hook-lib";

function FilterComponent() {
  const [params, setParams] = useQueryParams();

  return (
    <div>
      <input
        value={params.search || ""}
        onChange={(e) => setParams({ search: e.target.value })}
      />
    </div>
  );
}
```

## 📝 Yêu cầu

- React >= 19.1.0
- TypeScript >= 5.8.3

## 🔧 Development

```bash
# Clone repository
git clone https://github.com/your-username/my-react-hook-lib.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build
npm run build
```

## 📄 License

MIT
