import { CaretLeft, CaretRight } from "phosphor-react";

export function PaginationTop({ setCurrentPage, currentPage, countPage }) {
    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 500);
    };

    return (
        <div className="flex gap-4 items-center justify-between mt-6">
            <button onClick={() => {
                setCurrentPage(currentPage - 1);
                scrollToTop();
            }} disabled={currentPage === 1 ? true : false} className="flex disabled:hover:bg-[#990F71] disabled:opacity-0 disabled:hover:text-opacity-50 shadow-sm hover:shadow-md items-center justify-center group bg-[#990F71] hover:bg-[#B31284] font-medium text-opacity-50 hover:text-opacity-100 pl-1 pr-4 py-1 rounded-full text-white transition-all duration-200 ease-linear">
                <CaretLeft size={28} weight="fill" />
                Página Anterior
            </button>
            <button onClick={() => {
                setCurrentPage(currentPage + 1);
                scrollToTop();
            }} disabled={currentPage === countPage ? true : false} className="flex disabled:hover:bg-[#990F71] disabled:opacity-0 disabled:hover:text-opacity-50 shadow-sm hover:shadow-md items-center justify-center group bg-[#990F71] hover:bg-[#B31284] font-medium text-opacity-50 hover:text-opacity-100 pl-4 pr-1 py-1 rounded-full text-white transition-all duration-200 ease-linear">
                Próxima Página
                <CaretRight size={28} weight="fill" />
            </button>
        </div>
    )
}