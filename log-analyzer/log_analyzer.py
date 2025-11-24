import argparse

INFO = []
WARNING = []
ERROR = []
DEBUG = []

def log_analyzer(file):
	print("Opening file")
	with open(file, 'r') as f:
		for line in f.readlines():
			if "INFO" in line:
				INFO.append(line)
			elif "WARNING" in line:
				WARNING.append(line)
			elif "ERROR" in line:
				ERROR.append(line)
			elif "DEBUG" in line:
				DEBUG.append(line)
	print("Logs analyzed\n")
	print("Log Level Summary:")
	print("-------------------\n")
	print(f"INFO: {len(INFO)}")
	print(f"WARNING: {len(WARNING)}")
	print(f"ERROR: {len(ERROR)}")
	print(f"DEBUG: {len(DEBUG)}")

def log_messages(logs):
	print(f"\n{logs.upper()} messages")
	print("-------------------\n")
	if logs == "info":
		for line in INFO:
			print(f"{line}")
	elif logs == "warning":
		for line in WARNING:
			print(f"{line}")
	elif logs == "debug":
		for line in DEBUG:
			print(f"{line}")
	elif logs == "error":
		for line in ERROR:
			print(f"{line}")
	else:
		print(f"No such type: {logs}")

if __name__ == "__main__":
	parser = argparse.ArgumentParser(description="Log analyzer by Rex")
	parser.add_argument("file", type=str, help="The log file")
	parser.add_argument("--logs", type=str, help="Log level messages", choices=['info', 'warning', 'error', 'debug'])
	args = parser.parse_args()

	log_analyzer(args.file)
	if args.logs:
		log_messages(args.logs)

