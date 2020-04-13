from lru import lru


class lruTest:

    def __init__(self):
        pass

    def testcases(self):
        obj = lru(3)
        obj.put("google")
        assert obj.get("google") == "www.google.com", "Error occured at Google"
        obj.put("facebook")
        assert obj.get("facebook") == "www.facebook.com", "Error occured at Facebook"
        obj.put("gmail")
        obj.put("youtube")
        assert obj.get("google") == None
        print("All Testcases passed")
        lis = obj.get_cache()
        for i in lis:
            print(i)

if __name__ == "__main__":
    obj = lruTest()
    obj.testcases()
