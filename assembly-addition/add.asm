section .text
	global _start

_start:
	mov rax, 15
	mov rbx, 27
	add rax, rbx

	mov rdi, rax
	mov rax, 60
	syscall
