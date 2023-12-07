#include <bits/stdc++.h>
#include <fstream>
#include <vector>
#include <string>
#include <cctype>

std::vector<std::string> readFileLines(const std::string &filename)
{
	std::vector<std::string> lines;
	std::ifstream file(filename);

	if (!file.is_open())
	{
		std::cerr << "Error opening file: " << filename << std::endl;
		return lines;
	}
	std::string line;
	while (std::getline(file, line))
	{
		lines.push_back(line);
	}

	file.close();
	return lines;
}

std::string allDigits(const std::string &input)
{
	std::string first = "";
	std::string last = "";
	for (char c : input)
	{
		if (std::isdigit(c))
		{
			if (first == "")
			{
				first = c;
			}
			last = c;
		}
	}
	return first + last;
}

int main()
{
	int sum = 0;
	std::string input_file = "./day1/input.txt";
	std::vector<std::string> lines = readFileLines(input_file);

	if (lines.empty())
	{
		std::cout << "Failed to read lines from the file." << std::endl;
		return 1;
	}

	for (const std::string &line : lines)
	{
		sum += std::stol(allDigits(line));
		// std::cout << allDigits(line) << std::endl;
	}
	std::cout << sum << std::endl;
	return 0;
}
