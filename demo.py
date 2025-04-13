def convert_to_jsx(code, lang='py'):
    # Wrap the input code in a JSX format
    jsx_code = f'<Code code={{\n`{code}`\n}} lang="{lang}" />'
    return jsx_code

# Example usage
while True:
    python_code = input('\n\nEnter of python code: \n')
    jsx_format = convert_to_jsx(python_code)
    print("\n\n\n")
    print(jsx_format)
    print("\n")
