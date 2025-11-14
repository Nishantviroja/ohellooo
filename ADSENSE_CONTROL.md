# AdSense Test Mode Control Guide

## 🎛️ Simple On/Off Control

Your AdSense setup now has a **single variable** to control test mode across your entire site.

---

## 📍 Location

**File:** `app/data/integrations.js`

**Variable:** `ADSENSE_TEST_MODE`

---

## 🔧 How To Use

### **Test Mode ON** (Testing on fizoval.com)

```javascript
const integrations = {
  GA_MEASUREMENT_ID: "G-RMDMKFX1EM",
  CLARITY_PROJECT_ID: "tyxnewam75",
  ADSENSE_CLIENT_ID: "ca-pub-6543173328208739",
  
  ADSENSE_TEST_MODE: true,  // ✅ Enable test mode
};
```

**Result:**
- ✅ Test ads appear on fizoval.com
- ✅ Safe to test on your domain
- ❌ No revenue earned
- ✅ Won't violate AdSense policies

---

### **Test Mode OFF** (Production/Revenue)

```javascript
const integrations = {
  GA_MEASUREMENT_ID: "G-RMDMKFX1EM",
  CLARITY_PROJECT_ID: "tyxnewam75",
  ADSENSE_CLIENT_ID: "ca-pub-6543173328208739",
  
  ADSENSE_TEST_MODE: false,  // ❌ Disable test mode
};
```

**Result:**
- ✅ Real ads appear
- ✅ Earn full revenue
- ✅ Production mode
- ✅ All clicks/impressions count

---

## 🎯 Testing Workflow

### Step 1: Enable Test Mode
1. Open `app/data/integrations.js`
2. Set `ADSENSE_TEST_MODE: true`
3. Save file
4. Deploy to fizoval.com

### Step 2: Test Your Site
- Visit https://fizoval.com
- See test ads appear
- Verify ad placements
- Check all pages
- Test navigation (ads reload properly)

### Step 3: Go Live
1. Open `app/data/integrations.js`
2. Set `ADSENSE_TEST_MODE: false`
3. Save file
4. Deploy to fizoval.com
5. Start earning revenue! 💰

---

## 📊 Quick Reference

| Setting | Test Mode | Ads Shown | Revenue | Use Case |
|---------|-----------|-----------|---------|----------|
| `true` | ON | Test ads | ❌ None | Testing on domain |
| `false` | OFF | Real ads | ✅ Full | Production/Revenue |

---

## ✅ What This Controls

When you change `ADSENSE_TEST_MODE`, it affects:

1. **Auto Ads** (entire site)
2. **Manual In-Article Ads** (AdInArticle component)
3. **Ad Reload on Navigation**
4. **All pages and routes**

---

## 🚀 Deployment

### Current Setting
```javascript
ADSENSE_TEST_MODE: false  // Real ads, earning revenue
```

### To Test on fizoval.com
```bash
# 1. Enable test mode
# Edit app/data/integrations.js → ADSENSE_TEST_MODE: true

# 2. Deploy
npm run build
vercel deploy  # or your deployment method

# 3. Visit https://fizoval.com
# You'll see test ads!
```

### To Go Live
```bash
# 1. Disable test mode
# Edit app/data/integrations.js → ADSENSE_TEST_MODE: false

# 2. Deploy
npm run build
vercel deploy

# 3. Visit https://fizoval.com
# Real ads appear, start earning! 💰
```

---

## ⚠️ Important Notes

1. **Always deploy after changing** - Changes only apply after deployment
2. **Test on real domain** - Test mode works on fizoval.com, not localhost
3. **Don't forget to disable** - Set to `false` when going live to earn revenue
4. **One variable controls all** - Changes affect entire site automatically

---

## 🎉 Benefits

- ✅ **Simple** - One variable controls everything
- ✅ **Safe** - Test mode protects against policy violations
- ✅ **Clear** - Easy to understand on/off toggle
- ✅ **Centralized** - Single location for all AdSense config
- ✅ **Production Ready** - Deploy with confidence

---

**Current Mode:** Real Ads (Revenue Enabled) 💰

