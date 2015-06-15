from setuptools import setup, find_packages

setup(
    name='dviraciai',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'flask==0.10.1',
        'requests==2.7.0',
        'requests-cache==0.4.10'
    ],
    description='Map of bike sharing stations',
    url='https://github.com/Tasignotas/dviraciai',
)
