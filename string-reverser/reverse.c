#include <stdio.h>
#include <string.h>

void reverse_string(char *str) {
	char *start = str;
	char *end = str + strlen(str) - 1;

	while(start < end) {
		char temp = *start;
		*start = *end;
		*end = temp;

		start++;
		end--;
	}
}

int main(){
	char str[] = "l331";
	printf("Original string: %s\n", str);
	reverse_string(str);
	printf("Reversed string: %s\n", str);
}
